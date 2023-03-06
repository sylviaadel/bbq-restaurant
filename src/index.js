import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/shared/ScrollToTop";
import { CategoriesProvider } from "./state/CategoriesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CategoriesProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </CategoriesProvider>
  </React.StrictMode>
);
