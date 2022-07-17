import { Box, Button, Paper, styled, Typography } from "@mui/material";
import { useEffect,useCallback, useState } from "react";
import Main from "./components/main";
import Question from "./components/question";
import Side from "./components/side";
import { GetQuestionSport } from "./service/question";

const BoxStyled = styled(Box)({
    width:'60%',
    height:'100%',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-evenly'
})
const BoxSide = styled(Paper)({
    width:'30%',
    height:'100%',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-evenly',
    borderRadius: '10px',
    alignItems:'center'
})
const Content = (play, quest) =>{
    if(play){
       return <Question quest={quest}/>
    }
    if(!play){
        return <Typography>Play Kuis Now</Typography>
    }
}
export default function Home(){
    const [ quest, setQuest ] = useState([]);
    const [ play, setPlay ] = useState(false);
    const getListQuestSport = useCallback( async ()=>{
        const data = await GetQuestionSport();
        setQuest(data);
    },[GetQuestionSport]);
   
    const handlePlay = () =>{
        setPlay(true);
    }
    useEffect(()=>{
        getListQuestSport();
    },[play])
    return(
        <>
            <Box sx={{ width: '100%', height:'80vh', border:'solid black 1px',display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                    <BoxSide>
                        <Side/>
                        <Button variant="contained" onClick={(e) => handlePlay()} >Play</Button>
                    </BoxSide>
                    <BoxStyled>
                        {Content(play, quest)};
                    </BoxStyled>
                    
            </Box>
        </>
    )
}