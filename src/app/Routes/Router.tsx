import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import { Home } from "../Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [],
      },
    ],
  },
]);

export default router;
