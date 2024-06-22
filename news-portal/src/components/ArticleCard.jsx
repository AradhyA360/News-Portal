import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={article.urlToImage}
        alt={article.title}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{article.title}</h2>
        <p className="text-gray-700 mt-2">{article.description}</p>
        <Link
          className="text-blue-500 hover:underline mt-4 block"
          to={`/article/${encodeURIComponent(article.url)}`} // Ensure URL is correctly encoded
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
