import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentSort = searchParams.get("sortBy") || "";

  const handleChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (!value) {
      params.delete("sortBy");
    } else {
      params.set("sortBy", value);
    }

    navigate(`${location.pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-end mb-4">
      <select
        value={currentSort}
        onChange={handleChange}
        className="border px-3 py-2 rounded"
      >
        <option value="">Default</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;
