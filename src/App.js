import { PhotoProvider } from "react-photo-view";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Menubar";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import 'react-photo-view/dist/react-photo-view.css';
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
    <PhotoProvider>
    <div className=" ">
       <RouterProvider router={routes} />
    </div>
    </PhotoProvider>
  );
}

export default App;
