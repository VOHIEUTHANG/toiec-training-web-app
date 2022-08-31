import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../../routes";
import MainLayout from "../../layouts/MainLayout";
import "./style.css";

function App() {
  return (
    <div className="app">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Element = route.element;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <MainLayout>
                  <Element />
                </MainLayout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
