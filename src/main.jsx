import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import Root from "./layouts/Root";
import Login from "./auth/Login";
import AuthProvider from "./providers/AuthProvider";
import SignUp from "./auth/SignUp";
import Home from "./pages/Home";
import AllServices from "./pages/AllServices";
import ServiceDetails from "./pages/ServiceDetails";
import PrivateRoute from "./routes/PrivateRoute";
import AddService from "./pages/AddService";
import MyServices from "./pages/MyServices";
import MySchedules from "./pages/MySchedules";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
        loader: () => fetch(`${import.meta.env.VITE_SERVER}/faqs`)
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader: () => fetch(`${import.meta.env.VITE_SERVER}/services`)
      },
      {
        path: "/services/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER}/services/${params.id}`)
      },
      {
        path: "/services/new",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>,
      },
      {
        path: "/my-services",
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute>,
      },
      {
        path: "/my-schedules",
        element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Toaster />
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);