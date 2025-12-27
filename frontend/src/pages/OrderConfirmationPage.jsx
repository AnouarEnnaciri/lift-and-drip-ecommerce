import { useEffect, useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderConfirmationPage = () => {
  const { state } = useLocation();
  const cart = useSelector((s) => s.cart?.cart);

  const [paypalDetails, setPaypalDetails] = useState(state?.paypalDetails || null);

  useEffect(() => {
    if (state?.paypalDetails) setPaypalDetails(state.paypalDetails);
  }, [state]);

  const items = useMemo(() => {
    const fromCart = cart?.products;
    if (Array.isArray(fromCart)) return fromCart;
    return [];
  }, [cart]);

  const total = useMemo(() => {
    if (!items.length) return 0;
    return items.reduce((acc, p) => acc + Number(p.price || 0) * Number(p.quantity || 1), 0);
  }, [items]);

  const payerName =
    paypalDetails?.payer?.name?.given_name ||
    paypalDetails?.payer?.name?.first_name ||
    "";

  const captureId =
    paypalDetails?.purchase_units?.[0]?.payments?.captures?.[0]?.id || "";

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Order Confirmation</h1>

      <div className="mt-4 border rounded p-4">
        <div className="text-lg font-medium">
          Payment Status:{" "}
          <span className="font-semibold">
            {paypalDetails ? "PAID ✅" : "UNKNOWN"}
          </span>
        </div>

        {payerName ? <div className="mt-1">Hello {payerName}</div> : null}
        {captureId ? <div className="mt-1 text-sm opacity-70">Capture: {captureId}</div> : null}
      </div>

      <div className="mt-6 border rounded p-4">
        <h2 className="text-lg font-semibold">Items</h2>

        {items.length === 0 ? (
          <p className="mt-2 opacity-70">
            No items found. (Your cart might have been cleared.)
          </p>
        ) : (
          <div className="mt-4 space-y-4">
            {items.map((p, idx) => (
              <div key={idx} className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <div className="font-medium">{p.name}</div>
                    <div className="text-sm opacity-70">
                      Weight: {String(p.selectedWeight ?? p.weight ?? "default")}
                    </div>
                    <div className="text-sm opacity-70">Qty: {p.quantity}</div>
                  </div>
                </div>
                <div className="font-medium">
                  ${Number(p.price || 0).toLocaleString()}
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between pt-2">
              <div className="font-semibold">Total</div>
              <div className="font-semibold">${total.toFixed(2)}</div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex gap-3">
        <Link
          to="/"
          className="border rounded px-4 py-2 font-medium"
        >
          Back Home
        </Link>
        <Link
          to="/equipment"
          className="border rounded px-4 py-2 font-medium"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
