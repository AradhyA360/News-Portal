import React from "react";
import { useSelector } from "react-redux";
import ArticleCard from "../components/ArticleCard";
import Pagination from "../components/Pagination";
import CategoryFilter from "../components/CategoryFilter";

const HomePage = () => {
  const { articles, loading, error } = useSelector((state) => state.news);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <CategoryFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default HomePage;
