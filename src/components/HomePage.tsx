import { User, userReducer } from "./user";
import  { useReducer } from "react";
import { UserContext } from "./userContext";
import Login from "./login";
import { useState } from "react";
import Username_avatar from "./username_avatar";

   

const HomePage=()=>{

    const initialUser:User={
        firstName:'hila',
        lastName:'',
        mail:'',
        password:'1234',
        address:'',
        phone:''
    }
    const[isLogin, setIsLogin]=useState(false);
    const [user, userDispatch] = useReducer(userReducer, initialUser);

   

    const handleLoginSuccess = () => {
        setIsLogin(true); 
    };

return(<>
<UserContext.Provider value={{ user, userDispatch }}>
        {!isLogin?(
             <Login successLogin={handleLoginSuccess} />
         ) :(
            <Username_avatar/>

            )}
    
</UserContext.Provider>

</>)
}
export default HomePage;