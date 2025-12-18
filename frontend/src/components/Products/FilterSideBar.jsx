import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    category: null,
    equipmentType: null,
    weight: null,
    minPrice: 0,
    maxPrice: 5000,
  });

  const categories = [
    { label: "Conditioning Gear", value: "Conditioning Gear" },
    { label: "Strength Equipment", value: "Strength Equipment" },
  ];

  const equipmentTypes = {
    "Conditioning Gear": [
      "Jump Rope",
      "Resistance Band",
      "Medicine Ball",
      "Battle Rope",
      "Slam Ball",
      "Pull Up Bar",
    ],
    "Strength Equipment": [
      "Dumbbell",
      "Barbell",
      "Plate",
      "Bench",
      "Kettlebell",
      "Rack",
    ],
  };

  const weightRanges = [
    { label: "5 - 15 KG", value: "5-15" },
    { label: "20 - 30 KG", value: "20-30" },
    { label: "35 - 50 KG", value: "35-50" },
  ];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category ?? null,
      equipmentType: params.equipmentType ?? null,
      weight: params.weight ?? null,
      minPrice: params.minPrice ? Number(params.minPrice) : 0,
      maxPrice: params.maxPrice ? Number(params.maxPrice) : 5000,
    });
  }, [searchParams]);

  const updateURLParams = (next) => {
    const params = new URLSearchParams();
    Object.entries(next).forEach(([k, v]) => {
      if (v !== null && v !== "" && v !== undefined) {
        params.set(k, v);
      }
    });
    setSearchParams(params);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let next = { ...filters };

    if (name === "category") {
      next.category = value;
      next.equipmentType = null;
      next.weight = null;
    } else if (name === "maxPrice") {
      next.maxPrice = Number(value);
      next.minPrice = 0;
    } else {
      next[name] = value;
    }

    setFilters(next);
    updateURLParams(next);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium mb-4">Filter</h3>

      <div className="mb-6">
        {categories.map((c) => (
          <label key={c.value} className="flex items-center mb-1">
            <input type="radio" name="category" value={c.value} checked={filters.category === c.value} onChange={handleChange} />
            <span className="ml-2">{c.label}</span>
          </label>
        ))}
      </div>

      {filters.category && (
        <div className="mb-6">
          {(equipmentTypes[filters.category] || []).map((t) => (
            <label key={t} className="flex items-center mb-1">
              <input type="radio" name="equipmentType" value={t} checked={filters.equipmentType === t} onChange={handleChange} />
              <span className="ml-2">{t}</span>
            </label>
          ))}
        </div>
      )}

      {filters.category === "Strength Equipment" && (
        <div className="mb-6">
          {weightRanges.map((w) => (
            <label key={w.value} className="flex items-center mb-1">
              <input type="radio" name="weight" value={w.value} checked={filters.weight === w.value} onChange={handleChange} />
              <span className="ml-2">{w.label}</span>
            </label>
          ))}
        </div>
      )}

      <div className="mb-8">
        <input type="range" name="maxPrice" min={0} max={5000} value={filters.maxPrice} onChange={handleChange} />
        <div className="flex justify-between">
          <span>0 DH</span>
          <span>{filters.maxPrice} DH</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
