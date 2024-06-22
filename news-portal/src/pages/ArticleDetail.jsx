import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ArticleDetail = () => {
  const { id } = useParams();

  const article = useSelector((state) =>
    state.news.articles.find((a) => a.url === decodeURIComponent(id))
  );

  if (!article) return <p className="text-center mt-10">Article not found</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <img
        className="w-full h-auto object-cover mb-4"
        src={article.urlToImage}
        alt={article.title}
      />
      <p className="text-lg">{article.content}</p>

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Read Full Article
      </a>
    </div>
  );
};

export default ArticleDetail;
