import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import WeeklyOverview from "./pages/weekly-overview";
import Recipes from "./pages/recipes";
import ShoppingList from "./pages/shopping-list";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes/:day" element={<Recipes />} />
          <Route path="weekly-overview" element={<WeeklyOverview />} />
          <Route path="shopping-list" element={<ShoppingList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
