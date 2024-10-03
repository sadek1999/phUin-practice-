
import { createBrowserRouter } from "react-router-dom";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { studentPaths } from "./student.routes";
import App from "../App";
console.log("form router")

export const router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>
    },
    {
        path:"/admin",
        element:<App></App>,
        children:routesGenerator(adminPaths)
    },
    {
        path:"/student",
        element:<App></App>,
        children:routesGenerator(studentPaths)
    }
])