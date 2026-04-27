import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import "../styles/styles.css";
import Layout from "../components/layout/Layout";
import DashboardPage from "../features/dashboard/DashboardPage";
import BookList from "../features/books/BookList";
import FavoritesPage from "../features/favorites/FavoritesPage";
import CategoriesPage from "../features/categories/CategoriesPage";
import StatsPage from "../features/stats/StatsPage";
import SettingsPage from "../features/settings/SettingsPage";

function App() {
  const { state } = useAppContext();

  console.log(state);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
