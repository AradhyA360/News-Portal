
# React News Portal

## Overview

React News Portal is a responsive web application built using React and Vite. It fetches and displays news articles from a public API. Users can filter articles by categories and navigate through them using pagination. Additionally, a detailed view of each article is available upon selection.

## Features

- **Homepage Layout:**
  - Display a list of news articles with title, image, and summary.
  - Each article links to a detailed view.
  - Responsive design for desktop and mobile devices.

- **Category Filtering:**
  - Dropdown or buttons to filter articles by categories (e.g., Business, Technology, Entertainment).
  - UI updates to display articles from the selected category.

- **Pagination:**
  - Pagination at the bottom of the homepage.
  - Users can navigate through different pages of articles.

- **Detailed Article View Page:**
  - Full content of the article including media like images or videos.

- **API Integration:**
  - Uses NewsAPI to fetch news articles.
  - Handles loading states and errors during API calls.

- **State Management:**
  - Uses React hooks and Redux toolkit for state management.

- **Optional Features:**
  - Search feature to allow users to search for articles by keywords.
  - "Favorites" feature to save articles using local storage.

## Technologies Used

- React
- Vite
- Redux Toolkit
- Axios
- TailwindCSS (for styling)
- NewsAPI

## Getting Started

### Prerequisites

- ReactJS
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AradhyA360/News-Portal.git
   cd news-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your NewsAPI key:
   ```
   VITE_NEWS_API_KEY=your_news_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

### Deployment

1. Build the project for production:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `dist` folder to a hosting provider like Netlify or Vercel.

## Project Structure

```
news-portal/
├── public/
├── src/
│   ├── components/
│   │   ├── ArticleCard.jsx
│   │   ├── ArticleDetail.jsx
│   │   ├── Navbar.jsx
│   │   └── Pagination.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── ArticlePage.jsx
│   ├── services/
│   │   └── api.js
│   ├── store/
│   │   └── newsSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── vite.config.js
├── package.json
└── README.md
```

## Usage

- **Homepage:** Displays a list of articles with a title, image, and summary.
- **Filter by Category:** Use the dropdown or buttons in the navbar to filter articles by category.
- **Pagination:** Navigate through different pages of articles using pagination controls.
- **Detailed View:** Click on an article to view its full content.
- **Search (Optional):** Use the search feature to find articles by keywords.
- **Favorites (Optional):** Save articles to favorites, which persist across sessions using local storage.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [NewsAPI](https://newsapi.org/) for providing the news data.
- [Vite](https://vitejs.dev/) for the fast build tool.
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework.

## Contact

For any questions or feedback, please contact [aradhyapriyadarshi@gmail.com].

---