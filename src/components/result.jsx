import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext, useEffect, useState } from 'react';
import { ScoreContext } from '../service/context/ScoreContext';
import { AnswerContext } from '../service/context/answer';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
  };

export default function Result(props){
    const {isOpen} = props;
    const [open, setOpen] = useState(isOpen);
    const [score, setScore] = useContext(ScoreContext);
    const [count, setCount ] = useContext(AnswerContext);
    useEffect(()=>{
        
    })
    const handleClose = () => setOpen(false);
    return(
        <>
             <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Quiz Result
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Score : {score}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Question : 10
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Answer : {count}
                </Typography>
                <Button variant="contained" type='submit' sx={{ mt: 2 }}>Okay</Button>
                </Box>
                
            </Modal>
        </>
    )
}