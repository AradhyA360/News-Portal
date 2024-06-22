import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategory, getArticles } from "../store/newsSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
    dispatch(getArticles({ category, page: 1 }));
    navigate("/");
  };

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <h1 className="text-white font-bold text-size-6xl">
        <a href="http://localhost:5173">News Portal</a>
      </h1>
      <ul className="flex space-x-8">
        {["general", "business", "technology", "entertainment"].map(
          (category) => (
            <li
              key={category}
              className="text-white cursor-pointer"
              onClick={() => handleCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
