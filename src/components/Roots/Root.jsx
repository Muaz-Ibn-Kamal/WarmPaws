import { createBrowserRouter } from "react-router-dom"; 
import Home from "../Home/Home";
import Layouts from "../Layouts/Layouts";
import MyProfile from "../Pages/MyProfile";
import Services from "../Pages/Services";
import About from "../Pages/About";
import Login from "../Header/Login";
import Register from "../Header/Register";
import PriviteRouts from "../PrivteRoutes/PriviteRouts";
import ForgotPassword from "../Header/ForgotPassword";
import ViewDetails from "../Home/ViewDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />, 
    id: "root",
    loader: async () => {
      const response = await fetch("/pet.json"); 
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json(); 
    },
    children: [
      {
        index: true,
        element: <Home />, 
      },
      {
        path: "services",
        element: (
          <PriviteRouts>
            <Services />
          </PriviteRouts>
        ),
      },
      {
        path: "myprofile",
        element: (
          <PriviteRouts>
            <MyProfile />
          </PriviteRouts>
        ),
      },
      {
        path: "about",
        element: <About />, 
      },
      {
        path: "login",
        element: <Login />, 
      },
      {
        path: "register",
        element: <Register />, 
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />, 
      },
      {
        path: "services/:serviceId",
        element: (
          <PriviteRouts>
            <ViewDetails />
          </PriviteRouts>
        ),
      },
    ],
  },
]);
