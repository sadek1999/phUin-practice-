import { App } from "antd";
import { createBrowserRouter } from "react-router-dom";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>
    }
])