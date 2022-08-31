import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../../routes";
import mainLayout from "../../layouts/MainLayout";
import "./style.css";

function App() {
  return (
    <div className="app">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Element = route.element;
          const Layout = route.layout || mainLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
