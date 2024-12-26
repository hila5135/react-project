import { useRef } from "react";
import { useContext } from "react";
import { UserContext } from "./userContext";
import { useState } from "react";
import { Box, Button, Modal, TextField } from "../../node_modules/@mui/material/index";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }



  const Update=({ setUpdate }: { setUpdate:Function})=>{


    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phonRef = useRef<HTMLInputElement>(null);


    const context = useContext(UserContext);
    const [open,setOpen]=useState(true)


   const handleUpdate=()=>{
    if(context)
    {
    context?.userDispatch({ type: 'UPDATE', data: { firstName: firstNameRef.current?.value || '',
                                                    lastName: lastNameRef.current?.value || '',
                                                    password: passwordRef.current?.value || '' ,
                                                    address: addressRef.current?.value || '',
                                                    email: emailRef.current?.value || '' ,
                                                    phone: phonRef.current?.value || '' } })  
    }
    setOpen(false);  
    setUpdate();
    }
    
    
    
    return(<>
     <Button onClick={() => {setOpen(true)}}>Update</Button>
     <Modal open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <form action="">
            <Box sx={style}>
                <TextField label='firstuserName' inputRef={firstNameRef}/>
                <TextField label='lastuserName' inputRef={lastNameRef}/>
                <TextField label='password' inputRef={passwordRef}/>
                <TextField label='address' inputRef={addressRef}/>
                <TextField label='email' inputRef={emailRef}/>
                <TextField label='phone' inputRef={phonRef}/>

            <Button variant="contained" sx={{ background:'black',
                color:'white',
                borderRadius:'10px',
                border:'2px solid white',mt: 2 }} onClick={() => handleUpdate()} >Send </Button>
            </Box>
            </form>
    </Modal>

</>)



}
export default Update;
  