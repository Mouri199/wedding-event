import { createBrowserRouter } from "react-router-dom";
import Foremost from "../Foremost/Foremost";
import Home from "../Home/Home";
import About from "../About/About";
import Services from "../Services/Services";
import ServicesDetails from "../Services/ServicesDetails";
import Gallery from "../Gallery/Gallery";
import Blog from "../Blog/Blog";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import GalleryDetails from "../Gallery/GalleryDetails";
import ContactUs from "../Contact/ContactUs";
import BlogCardDetails from "../Blog/BlogCardDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Foremost></Foremost>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:() => fetch(`/Fakedata.json`),
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader:() => fetch(`/Fakedata.json`),
            },
            {
                path:"/sevicesDetails/:id",
                element:<ServicesDetails></ServicesDetails>,
                loader:() => fetch(`/Fakedata.json`),
            },
            {
                path:"/gallery",
                element: <PrivateRoute><Gallery></Gallery></PrivateRoute>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
               path:"/signUp",
               element: <SignUp></SignUp>,
            },
            {
                path:"/signin",
                element:<SignIn></SignIn>
            },
            {
                path:"/galleryDetails",
                element:<GalleryDetails></GalleryDetails>
            },
            {
                path:"/contactus",
                element:<ContactUs></ContactUs>
            },
            // {
            //     path:"/blogCardDetails",
            //     element:<BlogCardDetails></BlogCardDetails>,
            // },
            {
                path:"/blogCardDetails/:id",
                element:<BlogCardDetails></BlogCardDetails>,
                loader:() => fetch(`/blogData.json`)
            }
        ]
    }
])

export default router;