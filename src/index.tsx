import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";

import { createHashRouter, RouterProvider } from "react-router-dom";
import Page from "./pageStructure/Page";
import ComingSoon from "./pages/ComingSoon";

const router = createHashRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/pro-version",
        element: <ComingSoon />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
