import axios from "axios"
import axiosInstance from "./apiInterceptor";
const URL = process.env.REACT_APP_API_URL

export const GetMatchCardAPI = async()=>{
    try {
        let response = await axiosInstance.get(`${URL}/matches`)
        return  response?.data 
    } catch (error) {
        console.log('error: ', error);
    }
}

export const GetNewsAPI = async()=>{
    try {
        let response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=10308ea6f51d479491f051fdd598aa9b')
        console.log('response?.data?.articles: ', response?.data?.articles);
        return  response?.data?.articles 
    } catch (error) {
        console.log('error: ', error);
    }
}

//  get Series API data 
export const GetSeriesDataAPI = async(payload)=>{
    try {
        let response = await axiosInstance.get(`${URL}/matches/series?type=${payload}`)
        return  response?.data?.data 
    } catch (error) {
        console.log('error: ', error);
    }
}

//  get shedule API data 
export const GetsheduleDataAPI = async(payload)=>{
    try {
        let response = await axiosInstance.get(`${URL}/matches/schedules?type=${payload}`)
        return  response?.data?.data 
    } catch (error) {
        console.log('error: ', error);
    }
}

//  get live Score API data 
export const GetMatchDetailsAPI = async(payload)=>{
    try {
        let response = await axiosInstance.get(`${URL}/matches/info?matchId=${payload}`)
        return  response?.data?.data 
    } catch (error) {
        console.log('error: ', error);
    }
} 