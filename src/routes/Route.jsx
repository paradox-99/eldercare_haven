import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import HomePage from "../pages/homePage/HomePage";
import Accommodation from "../pages/accommodation/Accommodation";
import Services from "../pages/services/Services";
import Blog from "../pages/blog/Blog";
import Donation from "../pages/donation/Donation";
import Gallery from "../pages/gallery/Gallery";
import Signin from "../pages/sign_in/Signin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/accommodation",
                element: <Accommodation />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/donation",
                element: <Donation />
            },
            {
                path: "/gallery",
                element: <Gallery />
            },
            {
                path: "/sign-in",
                element: <Signin />
            }
        ]
    }
])

export default router;