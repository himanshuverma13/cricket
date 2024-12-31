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
        let response = await axios.get('https://gnews.io/api/v4/top-headlines?country=in&category=sports&apikey=31b16f3534fa964d8146ee81beaa7b6f')
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
//  get Teams Details API data 
export const GetTeamsDetailsAPI = async(payload)=>{
    try {
        let response = await axiosInstance.get(`${URL}/matches/getTeamsById?teamId=${payload}`)
        return  response?.data?.data 
    } catch (error) {
        console.log('error: ', error);
    }
} 

//  get live API data 
export const GetCommentariesAPI = async(payload)=>{
    try {
        let response = await axiosInstance.get(`${URL}/matches/commentaries?matchId=${payload}`)
        return  response?.data?.data 
    } catch (error) {
        console.log('error: ', error);
    }
} 


//  get live Score Card Data API data 
export const GetScoreCardDataAPI = async(payload)=>{
    try {
        let response = await axiosInstance.get(`${URL}/matches/getScore?matchId=${payload}`)
        return  response?.data?.data 
    } catch (error) {
        console.log('error: ', error);
    }
} 

//  get  Squads Data API data 
export const GetSquadsDataAPI = async(matchId,teamId)=>{
    try {
        let response = await axiosInstance.get(`${URL}/matches/getSquads?matchId=${matchId}&teamId=${teamId}`)
        return  response?.data?.data 
    } catch (error) {
        console.log('error: ', error);
    }
} 

