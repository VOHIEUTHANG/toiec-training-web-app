import React from "react";
import Home from "../page/Home";
import TrainingPage from "../page/Training";

type RouteType = {
  path: string;
  element: () => JSX.Element;
  layout?: () => JSX.Element;
};

const publicRoutes: RouteType[] = [
  { path: "/", element: Home },
  { path: "/training", element: TrainingPage },
];

const privateRoutes: RouteType[] = [];

export { publicRoutes, privateRoutes };
