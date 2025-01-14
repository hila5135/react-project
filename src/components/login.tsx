// import { Modal,Button,Box,TextField} from "@mui/material";
// import { useContext, useState } from "react";
// import { UserContext } from "./userContext";
// import { useRef } from "react";

// const style = {
//     position: 'absolute',
//     top: '20%',
//     left: '10%',
//     transform: 'translate(-50%, -50%)',
//     width: 200,
//     background: 'white',
//     border: '3px solid black',
//     boxShadow: 24,
//     borderRadius: '16px',
//     p: 4,
//   };
// const Login =({successLogin,typeAction,isOpen }:{successLogin:Function ,typeAction: string,isOpen:boolean })=> {
//     const context = useContext(UserContext);
//     const nameRef=useRef<HTMLInputElement>(null)
//     const passwordRef=useRef<HTMLInputElement>(null)
//     const [userID , setUserId] =  useState<string>()
 
//     useEffect(() => {
//       if (context?.user.id) {
//         console.log("User ID updated:", context.user.id);
//       }
//     }, [context?.user.id]);
  


//    const handleSubmit=()=>{
//     if(context)
//    {
//        setOpen(false);
//          if(nameRef.current?.value === context?.user.firstName&&passwordRef.current?.value===context?.user.password)
//          {
        
//         context?.userDispatch({ type: 'CREATE', data: { firstName: nameRef.current?.value || '',
//             password: passwordRef.current?.value || '',
//             lastName: '',
//             address: '',
//             phone: '',
//             email: '' } })
       
//         successLogin();
//         }
//         else {
//             context?.userDispatch({ type: 'REMOVE', data: {} });
//             //successLogin();
//           }
//     }
// }
   
    
    
//     return(<>
    
//      <Button sx={{position:'absolute',
//                 top:'5px',left:'50px' ,
//                 background:'black',
//                 color:'white',
//                 borderRadius:'10px',
//                 border:'2px solid white'}}
//                  onClick={() => {setOpen(true)}}>Login</Button>
//     <Modal open={open} 
//            onClose={() => setOpen(false)}
//            aria-labelledby="modal-modal-title" 
//            aria-describedby="modal-modal-description"
//             BackdropProps={{
//                 style: {
//                   backgroundColor: 'rgba(255, 255, 255, 0)', 
//                 }
//               }}
//             >
//         <Box sx={style}>        
//                 <TextField label='userName' inputRef={nameRef}/>
//                 <TextField label='password' inputRef={passwordRef}/>
//                 <Button variant="contained" sx={{ background:'black',
//                 color:'white',
//                 borderRadius:'10px',
//                 border:'2px solid white',mt: 2 }} onClick={ handleSubmit} >Send </Button>
//         </Box>             
//     </Modal>

// </>)



// }

// export default Login;

import { Modal, Button, Box, TextField } from "@mui/material";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "./userContext";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Login = ({ successLogin, typeAction,isOpen }: { successLogin: Function; typeAction: string,isOpen:boolean }) => {
  const context = useContext(UserContext);
  const firstnameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
   const [userID, setUserId] = useState<string>()

  useEffect(() => {
    if (context?.user.id) {
      console.log("User ID updated:", context.user.id);
    }
  }, [context?.user.id]);

  const handleSubmitLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const link =
        typeAction === "Sign"
          ? "http://localhost:3000/api/user/register"
          : "http://localhost:3000/api/user/login";

      const res = await axios.post(link, {
        firstName: firstnameRef.current?.value,
        password: passwordRef.current?.value,
      });

       setUserId(res.data.id);
       

      console.log(res)
      context?.userDispatch({
        type: "CREATE",
        data: { 
          id: res.data.id, 
          firstName: firstnameRef.current?.value || '',
                password: passwordRef.current?.value || ''}
      });

      console.log("User ID after dispatch:", res.data.id);
      
      alert(`${typeAction} successful`);
      successLogin();
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 400 || e.response?.status === 401) {
          alert(typeAction === "Sign" ? "User already exists" : "User not found");
        }  
      } else {
        console.error(e);
        alert("An unexpected error occurred.");
      }
    }
  }

  return (
    <Modal
      open={isOpen}
      onClose={() => {}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmitLogin}>
          <TextField label="Username" inputRef={firstnameRef} fullWidth sx={{ mb: 2 }} />
          <TextField
            label="Password"
            inputRef={passwordRef}
            type="password"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "black",
              color: "white",
              borderRadius: "10px",
              border: "2px solid white",
            }}
          >
            {typeAction}
          </Button>
        </form>
      </Box>
    </Modal>
  )
}

export default Login;