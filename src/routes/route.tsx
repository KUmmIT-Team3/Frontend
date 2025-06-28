import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import MyPage from "../pages/My/MyPage";
import CreateBandPage from "../pages/CreateBand/CreateBandPage";
import CreateBandPage2 from "../pages/CreateBand/CreateBandPage2";
import DetailBandPage from "../pages/DetailBand/DetailBandPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    children: [
      {
        path: "createBand",
        element: <div>123</div>,
      },
    ],
  },
  {
    path: "/home",
    element: <HomePage />,
    children: [
      {
        path: "createBand",
        element: <div>123</div>,
      },
    ],
  },
  {
    path: "/create",
    element: <CreateBandPage />,
    children: [
      {
        path: "createBand",
        element: <div>123</div>,
      },
    ],
  },
  {
    path: "/addmusic",
    element: <CreateBandPage2 />,
    children: [
      {
        path: "createBand",
        element: <div>123</div>,
      },
    ],
  },
  {
    path: "/detail/:id",
    element: <DetailBandPage />,
    children: [
      {
        path: "createBand",
        element: <div>123</div>,
      },
    ],
  },
  {
    path: "/My",
    element: <MyPage />,
    children: [
      {
        path: "createBand",
        element: <div>123</div>,
      },
    ],
  },
]);

export default router;
