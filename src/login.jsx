import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { auth } from './firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState,useEffect } from 'react';
import { Navigate,useNavigate  } from 'react-router-dom';
import { Alert } from '@mui/material';

const LoginNotif = (login)=>{
    if(login === 'success'){
        return <Alert severity="success" sx={{mt: 5}}>Login success</Alert>
    }
    if(login === 'fail'){
        return <Alert severity="error" sx={{mt: 5}}>Login failed</Alert>
    }
}
export default function Login(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notif, setNotif] = useState('');
    const navigate = useNavigate();
    const {setUser} = props;
    const handleLogin = () =>{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const userf= {
                    uid: user.uid,
                    email: user.email
                }
                setNotif('success');
                setUser(true);
                setLocalStr(userf);
                setTimeout(()=>{
                    navigate('/')
                    console.log('pindah')
                },[500])
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setNotif('fail')
            });
    }
    const setLocalStr = (user) =>{
        return(
            localStorage.setItem("users", JSON.stringify(user))
        )
    }
    useEffect(()=>{
        
    },[notif])
    return(
        <>
             <Container component="main" maxWidth="xs">
                <CssBaseline />
                {LoginNotif(notif)}
                    <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Kuisdot Sign In
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={()=> handleLogin()}
                            >
                            Sign In
                            </Button>
                        </Box>
                    </Box>
             </Container>
        </>
    )
}