import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Menubar";
import Home from "./pages/Home";

function App() {
  const routes=createBrowserRouter([
    {
      path:"/",
      element:<Home />
    }
  ])
  return (
    <div className=" ">
       <RouterProvider router={routes} />
    </div>
  );
}

export default App;
