import { PhotoProvider } from "react-photo-view";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Menubar";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import "react-photo-view/dist/react-photo-view.css";
import ServiceDetails from "./pages/ServiceDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddService from "./pages/AddService";
import Review from "./pages/Review";
import Blog from "./pages/Blog/Blog";
import PrivateAuth from "./pages/PrivateAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: async () => {
        return fetch("http://localhost:5000/service").then((res) => res.json());
      },
    },
    {
      path: "/service",
      element: <ServicePage />,
      loader: async () => {
        return fetch("http://localhost:5000/service").then((res) => res.json());
      },
    },
    {
      path: "/service/:id",
      element: <ServiceDetails />,
      loader: ({ params }) => {
        return fetch(`http://localhost:5000/service/${params.id}`).then((res) =>
          res.json()
        );
      },
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/addservice",
      element: (
        <PrivateAuth>
          <AddService />
        </PrivateAuth>
      ),
    },
    {
      path: "/review",
      element: (
        <PrivateAuth>
          {" "}
          <Review />
        </PrivateAuth>
      ),
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);
  return (
    <PhotoProvider>
      <div className=" ">
        <RouterProvider router={routes} />
      </div>
      <ToastContainer />
    </PhotoProvider>
  );
}

export default App;
