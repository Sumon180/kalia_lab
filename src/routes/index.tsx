import React from "react";
import Page2 from "../components/Page2";
import { RouteObject } from "react-router-dom";

const App = React.lazy(() => import("../App"));

const router: RouteObject[] = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/page2",
        element: <Page2 />,
    }
]