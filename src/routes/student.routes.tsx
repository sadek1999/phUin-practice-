
import StudentHome from "../pages/student/StudentHome";
import MyProfile from "../pages/student/MyProfile";


 export const studentPaths=[
    {
        name:'home',
        path:'home',
        element:<StudentHome></StudentHome>
    },
    {
        name:'Student Management',
        children:[
            {
                name:"tody class",
                path:"todyClass",
                element:<MyProfile></MyProfile>
            },{
                name:'My profile',
                path:'myProfile',
                element:<MyProfile></MyProfile>
            }
        ]
        
    }
 ] 