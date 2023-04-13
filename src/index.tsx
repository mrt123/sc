import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";

import { createHashRouter, RouterProvider } from "react-router-dom";
import Page from "./pageStructure/Page";

const router = createHashRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
