import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Page Checkout */}
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />

          {/* Page Home */}
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />

          {/* Catch-all (404 or unknown routes) */}
          <Route
            path="*"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
