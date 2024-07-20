import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import NotFoundPage from "./not-found";
import HomePage from "./routes/home";
import "./index.css";
import ContactPage from "./routes/contact";
import AboutPage from "./routes/about";
import ServicesPage from "./routes/services";
import CareersPage from "./routes/careers";
import { getJobInformation, getJobsInformation } from "./data";
import CareersInformationPage from "./routes/CareersInformationPage";

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
        element: <ContactPage/>,
      },
      {
        path: "/about-us",
        element: <AboutPage/>,
      },
      {
        path: "/services",
        element: <ServicesPage/>,
      },
      {
        path: "/careers",
        element: <CareersPage/>,
        loader: async ()=> {
          return getJobsInformation()
        }
      },
      { 
        path: "/careers/:id",
        element: <CareersInformationPage/>,
        loader: async ({params})=> {
          return getJobInformation(params.id)
        }
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
