import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import NotFoundPage from "./not-found";
import HomePage from "./routes/home";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Root/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/contact",
        element: <HomePage/>,
      },
      {
        path: "/aboutus",
        element: <HomePage/>,
      },
      {
        path: "/services",
        element: <HomePage/>,
      },
      {
        path: "/careers",
        element: <HomePage/>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
