import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, currency = "USD", onSuccess, onError }) => {
  const value = (Number(amount) || 0).toFixed(2);
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  if (!clientId) return null;

  return (
    <PayPalScriptProvider
      options={{
        "client-id": clientId,
        currency,
        intent: "capture",
        components: "buttons",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        forceReRender={[value, currency]}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value, currency_code: currency } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => onSuccess(details));
        }}
        onError={(err) => {
          console.error("PayPal error:", err);
          onError(err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
