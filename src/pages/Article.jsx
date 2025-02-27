import { useParams, useNavigate } from "react-router-dom"
import { fetchTopHeadlines } from "../services/newsService";
import {useState, useEffect} from "react";
import DateObject from "react-date-object";
import { formatDate } from '../utils/dateHelper';

export default function Article(){

    var date = new DateObject("2020 8 21 11 55 36 100 am");

    const {id} = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null); //Stores selected article
    const [loading, setLoading] = useState(true); //loding state

    useEffect(() => {
        const getNews = async () => {
            const article = await fetchTopHeadlines();
            if(article[id]){
                setArticle(article[id]);
            }
            setLoading(false);
        };
        getNews();
    }, [id]);

    if(loading) return <p className="text-center text-lg">Loading article...</p>;
    if(!article) return <p className="text-center text-lg">Article not found</p>;




   
    return (
        <div className="container mx-auto p-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold">{article.title}</h1>
        <span className="text-gray-300 my-2">{article.author}</span>
        <p className="text-gray-600 my-2">{formatDate(article.publishedAt)}</p>
  
        {article.urlToImage && (
        <img src={article.urlToImage} alt="Article" className="w-full h-64 object-cover rounded my-4" />
        )}
        <p className="text-lg">{article.description || "No description available."}</p>
  
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          Read full article →
        </a>
      </div>
    )
}