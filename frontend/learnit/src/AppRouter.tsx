import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/homepage";
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>, //Eventually a topbar should go here
    children: [
      { path: "", element: <HomePage /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
