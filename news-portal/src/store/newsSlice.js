import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchArticles } from "../services/api";

export const getArticles = createAsyncThunk(
  "news/getArticles",
  async ({ category, page }) => {
    const response = await fetchArticles(category, page);
    return response.articles;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    loading: false,
    error: null,
    category: "general",
    page: 1,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage } = newsSlice.actions;
export default newsSlice.reducer;
