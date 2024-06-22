import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "./store/newsSlice";
import HomePage from "./pages/HomePage";
import ArticleDetail from "./pages/ArticleDetail";
import Navbar from "./components/Navbar";

const App = () => {
  const dispatch = useDispatch();
  const { category, page } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getArticles({ category, page }));
  }, [dispatch, category, page]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
};

export default App;
