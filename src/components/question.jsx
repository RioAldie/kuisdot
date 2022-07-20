import * as React from 'react';
import Radio from '@mui/material/Radio';
import { Box, Button, styled, Typography } from "@mui/material";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { reducer, initialState } from '../service/reducer';
import { AnswerContext } from '../service/context/answer';
import { ScoreContext } from '../service/context/ScoreContext';

export default function Question(props){
    const [value, setValue] = React.useState();
    const [ index, setIndex ] = React.useState(0);
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const { quest } = props;
    const [questActive, setQuestActive] = React.useState(quest[0]);
    const [score, setScore] = React.useContext(ScoreContext);
    const [count, setCount] = React.useContext(AnswerContext);
    
    const handleAnswer =(e) =>{
        const answer =  e.target.value;
        if(questActive.correct_answer === answer ){
            setScore(score + 1);
        }
        console.log(questActive.correct_answer);
        console.log(answer);
        setCount(count + 1)
        handleNext();
    }
    const handleQuest = (i) =>{
        const actived = quest[i];
        setQuestActive(actived);
    }
    const handleNext = () =>{
        let i = index + 1;
        setIndex(i);
        handleQuest(i);
    }
   
    
    React.useEffect(()=>{
        console.log('scores: ',score);
    },[index, score])
    return(
        <>
             <Box>
                    <Typography variant="body1">
                        {questActive.question}
                    </Typography>
             </Box>
                <Box>
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Answer</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                    >
                        {count}
                        <FormControlLabel value={'True'} onClick={(e) => handleAnswer(e)} control={<Radio />} label="True" />
                        <FormControlLabel value={'False'} onClick={(e) => handleAnswer(e)} control={<Radio />} label="False" />
                    </RadioGroup>
                </FormControl>
             </Box>
        </>
    )
}