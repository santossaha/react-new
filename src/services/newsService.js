import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL =  "https://newsapi.org/v2";
/**
 * Fetches top headlines from NewsAPI
 * @returns {Promise} News articles
 */

export  const fetchTopHeadlines = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
        return response.data.articles;
    }catch(error){
        console.log("Error fetching news: ", error);
        return [];
    }
}

export const fetchNewsByCategory = async (category) => {
    try{
        const response = await axios.get(`${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
        return response.data.articles;
    }catch(error){
        console.log("Error Fetching News:", error);
        return [];
    }
}

export const fetchNewsBykeyword = async (query) => {
    try{
        const response  = await axios.get(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`)
        return response.data.articles;
    }catch(error){
        console.log("Error Fetching News:", error);
        return [];
    }
}