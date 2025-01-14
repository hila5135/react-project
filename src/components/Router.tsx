import {createBrowserRouter } from 'react-router-dom';
import App from "../App";
import AppLayot from './AppLayot';
import HomePage from "./HomePage";
import Login from "./login";
import Update from './Update';
import Username_avatar from "./username_avatar";

export const myRouter=createBrowserRouter ([
{
    path:'/',
    element : <AppLayot/>,
    errorElement:<>main error</>,
    children:
        [{ path:'login' , element:<Login/>} ,
         { path:'update' , element: <Update/>},
         { path:'username' , element : <Username_avatar/>},
         { path: '/' , element: <HomePage/>}
        ]
    }
]
)


