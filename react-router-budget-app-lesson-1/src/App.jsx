
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Routes
import Dashboard, { dashBoardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dashBoardLoader,
    errorElement: <Error/>
  },


]);





function App() {
  return <div className="App">
    <RouterProvider router={router} />
  </div>;
}

export default App;
