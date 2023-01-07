import { PhotoProvider } from "react-photo-view";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Menubar";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import 'react-photo-view/dist/react-photo-view.css';
import ServiceDetails from "./pages/ServiceDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
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
    ,
    {
      path:"/service/:id",
      element:<ServiceDetails />
    },
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/register",
      element:<Register />
    },
  ])
  return (
    <PhotoProvider>
    <div className=" ">
       <RouterProvider router={routes} />
    </div>
    </PhotoProvider>
  );
}

export default App;
