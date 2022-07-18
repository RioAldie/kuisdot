import { createContext, useContext, useEffect, useState } from "react";



const AnswerContextDefaultValue = {
    count : 1,
    setCount: state => {}
}

export const AnswerContext = createContext(AnswerContextDefaultValue)


export default function AnswerProvider({children}){
    const [ count, setCount ] = useState(AnswerContextDefaultValue.count);
    useEffect(()=>{
        console.log(count);
    },[count]);
    return(
        <>
            <AnswerContext.Provider value={[count, setCount]}>
                { children }
            </AnswerContext.Provider>
        </>
    )
}