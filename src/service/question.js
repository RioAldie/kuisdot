import { async } from "@firebase/util";
import axios from "axios";

const ROOT_API = 'https://opentdb.com/api.php?';
const AMOUNT = 'amount=10';


export async function GetQuestionSport(){
    const CATEGORY = '&category=21';
    const URL = '&type=boolean';
    const response =  await axios.get(`${ROOT_API}${AMOUNT}${CATEGORY}${URL}`);
    const axiosResponse =  response.data;
    console.log(axiosResponse.results)
    return axiosResponse.results;
}