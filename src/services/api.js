import axios from "axios";

const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://newsapi.org/v2/top-headlines?country=in&apiKey";

export const fetchArticles = async (category, page) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        apiKey: VITE_API_KEY,
        category: category,
        page: page,
        pageSize: 12,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
