import { useState } from "react";
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react";

const FilterSideBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const[filters,setFilters] = useState({
        category: "",
        equipmentType:"",
        weight:"",
        color:"",
        minPrice:0,
        maxPrice:500,
    });



    const categories = ["Conditioning Gear", "Strength Equipment"];

    const equipmentTypes = {

  "Conditioning Gear": [
    "Jump Ropes",
    "Resistance Bands",
    "Kettlebells",
    "Medicine Balls",
    "Battle Ropes",
  ],
  "Strength Equipment": [
    "Dumbbells",
    "Barbells",
    "Weight Plates",
    "Benches",
    "Racks",
  ],
};

    const color =[
        "Black", "Gray", "Red", "Blue"
        ];

        const weight =["5 – 15 KG", "20 – 30 KG", "35 – 50 KG"];
useEffect(() => {
  const params = Object.fromEntries([...searchParams]);
  setFilters((prev) => ({
    ...prev,
    category: params.category || "",
    equipmentType: params.equipmentType || "",
    color: params.color || "",
    weight: params.weight || "",
    minPrice: params.minPrice ? Number(params.minPrice) : 0,
    maxPrice: params.maxPrice ? Number(params.maxPrice) : 500,
  }));
}, [searchParams]);


{/*THE PART WHERE WE CREATE THE HANDLER */}

const handleFilterChange = (e) => {
  const { name, value } = e.target;

  // our own filters
  let nextFilters;

  setFilters((prev) => {
    nextFilters = { ...prev };

    if (name === "category") {
      nextFilters.category = value;
      nextFilters.equipmentType = "";
    } else if (name === "maxPrice") {
      // range gives string and it will make it number
      nextFilters.maxPrice = Number(value);
    } else {
      nextFilters[name] = value;
    }

    return nextFilters;
  });

  // write the same thing to the URL
  updateURLParams(
    name === "maxPrice"
      ? { ...filters, maxPrice: Number(value) }
      : name === "category"
      ? { ...filters, category: value, equipmentType: "" }
      : { ...filters, [name]: value }
  );
};


const updateURLParams = (newFilters) => {
  const params = new URLSearchParams();
  Object.keys(newFilters).forEach((key) => {
    if (newFilters[key]) {
      params.set(key, newFilters[key]);
    }
  });
  setSearchParams(params);
};


return ( <div className="p-4">
  <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

 {/* Category Filter */}
  <div className="mb-6">
  <label className="block text-gray-600 font-medium mb-2">Category</label>
  {categories.map((category) => (
    <div key={category} className="flex items-center mb-1">
      <input
        type="radio"
        name="category"
        value={category}
        checked={filters.category === category}
        onChange={handleFilterChange}
        className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
      />
      <span className="text-gray-700">{category}</span>
    </div>
  ))}
</div>

{/* Equipment Type Filter */}

{filters.category && (
  <div className="mb-6">
    <label className="block text-gray-600 font-medium mb-2">
      Equipment Type
    </label>
    {equipmentTypes[filters.category].map((type) => (
      <div key={type} className="flex items-center mb-1">
        <input
          type="radio"
          name="equipmentType"
          value={type}
          checked={filters.equipmentType === type}
          onChange={handleFilterChange}
          className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
        />
        <span className="text-gray-700">{type}</span>
      </div>
    ))}
  </div>
)}

  {/* Weight Filter */}
  {filters.category === "Strength Equipment" && (
  <div className="mb-6">
    <label className="block text-gray-600 font-medium mb-2">
      Weight Range
      </label>
    {weight.map((weight) => (
      <div key={weight} className="flex items-center mb-1">
        <input
         type="radio" 
         name="weight"
         value={weight}
         checked={filters.weight === weight}
         onChange={handleFilterChange}
          className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
          />
          <span className="text-gray-700">{weight}</span>
      </div>
    ))}
  </div>
  )}

  {/* Color Filter */}
<div className="mb-6">
  <label className="block text-gray-600 font-medium mb-2">Color</label>
  <div className="flex flex-wrap gap-2">
    {color.map((color) => (
      <button key={color} 
      name="color"
      value={color}
      onClick={() =>
  handleFilterChange({ target: { name: "color", value: color } }) }
      className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${
      filters.color === color ? "ring-2 ring-blue-500" : ""}`}
      style={{backgroundColor: color.toLowerCase()}}
      ></button>
    ))}
  </div>
  </div>

  {/* Price Range Filter */}
  <div className="mb-8">
    <label className="block text-gray-600 font-medium mb-2">
      Price Range
      </label>
      <input
      type="range"
       name="maxPrice"
       value={filters.maxPrice}
       onChange={handleFilterChange}
       min={0}
       max={500}
         className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
         />
         <div className="flex justify-between text-gray-600 mt-2">
          <span>0 DH</span>
          <span>{filters.maxPrice} DH</span>
         </div>
  </div>
</div>
 );
};

export default FilterSideBar 