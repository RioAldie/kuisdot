import { Box, Button, Paper, styled, Typography } from "@mui/material";
import { useEffect,useCallback, useState } from "react";
import Main from "./components/main";
import { useTimer } from 'react-timer-hook';
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
function MyTimer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      hours,
      days
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    return (
        <><div style={{ textAlign: 'center' }}>
            <Typography>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </Typography>
        </div>
        </>
      );
}
const Timer = (play) =>{
    if(play){
        const time = new Date();
        time.setSeconds(time.getSeconds() + 600);
        return <MyTimer expiryTimestamp={time}/>
    }
    return null;
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
        const time = new Date();
        time.setSeconds(time.getSeconds() + 600);
    }
    useEffect(()=>{
        getListQuestSport();
    },[])
    
    return(
        <>
            <Box sx={{ width: '100%', height:'80vh', border:'solid black 1px',display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                    <BoxSide>
                        <Side/>
                        { Timer(play)}
                        <Button variant="contained" onClick={(e) => handlePlay()} >Play</Button>
                    </BoxSide>
                    <BoxStyled>
                        {Content(play, quest)};
                    </BoxStyled>
                    
            </Box>
        </>
    )
}