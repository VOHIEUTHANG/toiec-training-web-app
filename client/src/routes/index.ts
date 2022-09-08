import Home from "../page/Home";
import TrainingPage from "../page/Training";
import ToiecTipsPage from "../page/ToiecTips";
import MockTestPage from "../page/MockTest";
import DocumentsPage from "../page/Documents";
import LoginPage from "../page/Login";
import RegisterPage from "../page/Register";
import TrainingListeningDetail from "../page/Training/Listening";
import TrainingReadingDetail from "../page/Training/Reading";
import TrainingPractive from "../page/Training/Practice";
type RouteType = {
  path: string;
  element: () => JSX.Element;
  layout?: () => JSX.Element;
};

const publicRoutes: RouteType[] = [
  { path: "/", element: Home },
  { path: "/training", element: TrainingPage },
  { path: "/toiec-tips", element: ToiecTipsPage },
  { path: "/mock-test", element: MockTestPage },
  { path: "/mock-test", element: MockTestPage },
  { path: "/documents", element: DocumentsPage },
  { path: "/user/login", element: LoginPage },
  { path: "/user/register", element: RegisterPage },
  { path: "/training/listening/:partID", element: TrainingListeningDetail },
  { path: "/training/reading/:partID", element: TrainingReadingDetail },
  {
    path: "/training/practice/:partID/:testID",
    element: TrainingPractive,
  },
];

const privateRoutes: RouteType[] = [];

export { publicRoutes, privateRoutes };
