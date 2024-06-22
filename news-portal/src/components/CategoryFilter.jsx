import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/newsSlice";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const categories = ["General", "Business", "Technology", "Entertainment"];

  const handleCategoryChange = (event) => {
    dispatch(setCategory(event.target.value));
  };

  return (
    <div className="my-4">
      <select className="border p-2 rounded-lg" onChange={handleCategoryChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
