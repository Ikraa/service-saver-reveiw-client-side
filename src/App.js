import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Menubar";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";

function App() {
  const routes=createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/service",
      element:<ServicePage />
    }
  ])
  return (
    <div className=" ">
       <RouterProvider router={routes} />
    </div>
  );
}

export default App;
