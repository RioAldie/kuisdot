import { Box, Button, styled, Typography } from "@mui/material";
import { useCallback, useState,useEffect } from "react";
import { GetQuestionSport } from "../service/question";
import Question from "./question";

export default function Main(){
    const [ quest, setQuest ] = useState([]);
    const getListQuestSport = useCallback( async ()=>{
        const data = await GetQuestionSport();
        setQuest(data);
    },[GetQuestionSport]);
   

    useEffect(()=>{
        getListQuestSport();
    },[])
    const BoxStyled = styled(Box)({
        width:'60%',
        height:'100%',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-evenly'
    })
    return(
        <>
            <BoxStyled>
               <Question quest={quest}/>
            </BoxStyled>
        </>
    )
}