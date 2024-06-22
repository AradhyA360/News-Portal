import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../store/newsSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.news);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="text-lg">Page {page}</span>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
