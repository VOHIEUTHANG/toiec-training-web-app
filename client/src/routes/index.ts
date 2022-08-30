import React from "react";
import Home from "../page/Home";
import TrainingPage from "../page/Training";

type RouteType = {
  path: string;
  element: () => React.ReactNode;
  layout?: () => React.ReactNode;
};

const publicRoutes: RouteType[] = [
  { path: "/", element: Home },
  { path: "/training", element: TrainingPage },
];

const privateRoutes: RouteType[] = [];

export { publicRoutes, privateRoutes };
