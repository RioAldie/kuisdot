import { Box, Button, Paper, styled, Typography } from "@mui/material";
import { useEffect,useCallback, useState } from "react";
import Main from "./components/main";
import { useTimer } from 'react-timer-hook';
import Question from "./components/question";
import Side from "./components/side";
import { GetQuestionSport } from "./service/question";
import Result from "./components/result";
import History from "./components/history";

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
    const [open, setOpen ] =  useState(false);
    const {
      seconds,
      minutes,
      hours,
      days
    } = useTimer({ expiryTimestamp, onExpire: () => setOpen(true)});
    const handleResult = () =>{
        if(open){
            return <Result isOpen = {true}/>
        }
    }
    useEffect(()=>{
       
    },[open])
    return (
        <><div style={{ textAlign: 'center' }}>
            <Typography>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </Typography>
            {handleResult()}
        </div>
        </>
      );
}
const Timer = (play) =>{
    if(play){
        const time = new Date();
        time.setSeconds(time.getSeconds() + 30);
        return <MyTimer expiryTimestamp={time}/>
    }
    if(!play){
        
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
    }
    useEffect(()=>{
        getListQuestSport();
    },[])
    const playButton = ()=>{
        if(play){
            return <Button variant="contained" onClick={(e) => handlePlay()} sx={{display:'none'}}>Play</Button>
        }
        return <Button variant="contained" onClick={(e) => handlePlay()} >Play</Button>
    }
    return(
        <>
            <Box sx={{ width: '100%', height:'80vh',display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                    <BoxSide>
                        <Side/>
                        { Timer(play)}
                        {playButton()}
                    </BoxSide>
                    <BoxStyled>
                        {Content(play, quest)};
                    </BoxStyled>
            </Box>
            <History/>
        </>
    )
}