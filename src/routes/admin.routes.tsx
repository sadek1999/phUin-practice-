
import AdminHome from "../pages/admin/AdminHome";
import Manage from "../pages/admin/Manage";


export const adminPaths=[
    {
        name:'home',
        path:'home',
        element:<AdminHome></AdminHome>
    },{
        name:"user Management",
        children:[
            {
                name:'student',
                path:'student',
                element:<Manage></Manage>
            },
            {
                name:"Faculty",
                path:"faculty",
                element:<Manage></Manage>
            }
        ]
    }
]