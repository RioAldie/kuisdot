import { Box, Paper, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const BoxHistory = styled(Paper)({
    width:'100px',
    height:'100px',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-evenly',
    borderRadius: '10px',
    alignItems:'center'
})
export default function History() {
    const [results, setResults] = useState([]);
    const getResulst = ()=>{
        const data = JSON.parse(localStorage.getItem('result'));
        return setResults(data);
    }
    const handleHistory = (results) =>{
        console.log(results)
        if(results === null){
            return <Typography>Histori tidak ditemukan</Typography>
        }
        return(
            results.map((result)=>{
                console.log(result);
                  return  <BoxHistory key={result.id}>
                        <Typography>
                           Score: {result.score}
                        </Typography>
                        <Typography>
                           Answer: { result.answer}
                        </Typography>
                        <Typography>
                           Quest: {result.quest}
                        </Typography>
                    </BoxHistory>
                })
        )
    }
   useEffect(()=>{
    getResulst();
   },[])
    return(
        <>
            <Box sx={{display: 'flex', width: '80%', maxHeight:'100vh',flexDirection:'column',mt: 5,mb:5,justifyContent:'space-evenly',alignItems:'center'}}>
                <Typography variant="h4" mb={2}>History Quiz</Typography>
                <Box sx={{display: 'flex', width: '80%', maxHeight:'100vh',flexDirection:'row',mt: 5,mb:5,justifyContent:'space-evenly',alignItems:'center'}}>
                   {
                    handleHistory(results)
                   } 
                </Box>
                

            </Box>
        </>
    )
}