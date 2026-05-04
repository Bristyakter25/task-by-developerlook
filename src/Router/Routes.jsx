import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    //   errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
        path: "/",
        element: <HomePage></HomePage>
      },
      
     
    ]
    },
  ]);