import { Box, styled, Typography,Paper, Button } from "@mui/material";
import { useContext, useEffect, useReducer } from "react";
import { useTimer } from 'react-timer-hook';
import { AnswerContext } from "../service/context/answer";
import { reducer, initialState } from "../service/reducer";


export default function Side(){
    const [state, dispatch] = useReducer(reducer, initialState);
    const [count, setCount] = useContext(AnswerContext);
    const BoxStyled = styled(Paper)({
        width:'30%',
        height:'100%',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-evenly',
        borderRadius: '10px',
        alignItems:'center'
    })
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600);
    useEffect(()=>{
        console.log(count)
    },[state])
    return(
        <>
                
                <Box sx={{display:'flex', flexDirection:'row'}}>
                    <Typography variant="h5">Jumlah Soal : 10</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row'}}>
                    <Typography variant="h5">Dikerjakan : {count}</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row'}}>
                    <Typography variant="h5">Sisa : 0</Typography>
                </Box>
        </>
    )
}