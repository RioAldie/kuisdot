import * as React from 'react';
import Radio from '@mui/material/Radio';
import { Box, Button, styled, Typography } from "@mui/material";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Question(props){
    const [value, setValue] = React.useState();
    const [ index, setIndex ] = React.useState(0);
    const { quest } = props;
    const [questActive, setQuestActive] = React.useState(quest[0]);
    
    const handleAnswer =(e) =>{
        const answer =  e.target.value;
        if(questActive.correct_answer === answer ){
            console.log('benar');
        }
        console.log(questActive.correct_answer);
        console.log(answer);
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
        
    },[index])
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
                        <FormControlLabel value={'True'} onClick={(e) => handleAnswer(e)} control={<Radio />} label="True" />
                        <FormControlLabel value={'False'} onClick={(e) => handleAnswer(e)} control={<Radio />} label="False" />
                    </RadioGroup>
                </FormControl>
             </Box>
        </>
    )
}