import axios from "axios";

const API_KEY = "a59e3bbf1bfa45b2a7cfe4144c795359";
const BASE_URL = "https://newsapi.org/v2/top-headlines?country=in&apiKey";

export const fetchArticles = async (category, page) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        apiKey: API_KEY,
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
