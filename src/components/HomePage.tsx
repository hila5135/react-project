import { User, userReducer } from "./user";
import { useReducer } from "react";
import { UserContext } from "./userContext";
import Login from "./login";
import { useState } from "react";
import Username_avatar from "./username_avatar";
import { Button } from "../../node_modules/@mui/material/index";



const HomePage = () => {

    const initialUser: User = {//אין צורך לאתחל נתונים כי יש db
        id:'',
        firstName: '',
        lastName: '',
        mail: '',
        password: '',
        address: '',
        phone: ''
    }
    const [isLogin, setIsLogin] = useState(false);
    const [user, userDispatch] = useReducer(userReducer, initialUser);
    const [type, setType] = useState('Login');
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleLoginSuccess = () => {
        setIsLogin((prev) => {
            if (!prev) setIsLoginOpen(false);
            return !prev;
        });
    };

    return (<>
        <UserContext.Provider value={{ user, userDispatch }}>
            {!isLogin &&
                (<>
                    <Button
                        variant="contained"
                        sx={{
                            mx: 2,
                            backgroundColor: '#40E0D0',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#48C9B0'
                            }
                        }}
                        onClick={() => { setIsLoginOpen(true); setType("Sign"); }}
                    >
                        sign in
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            mx: 2,
                            backgroundColor: '#40E0D0',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#48C9B0'
                            }
                        }}
                        onClick={() => { setIsLoginOpen(true); setType("Login"); }}
                    >
                        login
                    </Button>

                </>)

            }

            {isLoginOpen && <Login successLogin={handleLoginSuccess} typeAction={type} isOpen={isLoginOpen} />}


            {isLogin && <Username_avatar />}


        </UserContext.Provider>

    </>)
}
export default HomePage;