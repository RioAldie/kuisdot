import { createContext, useEffect, useState } from "react"


const ScoreContextDevaultValue={
    score: 0,
    setScore: state => {}
}

export const ScoreContext = createContext(ScoreContextDevaultValue);
export default function ScoreProvider({children}){
    
    const [score, setScore] = useState(ScoreContextDevaultValue.score);
    useEffect(()=>{
        console.log(score)
    })
    return(
        <>
            <ScoreContext.Provider value={[score, setScore]}>
                { children }
            </ScoreContext.Provider>
        </>
    )
}