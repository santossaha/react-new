import { useState, useEffect } from 'react';
import { fetchTopHeadlines } from "../services/newsService";
import { Link } from 'react-router-dom';
import CategoryList  from './CategoryList';



export default function Home() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNews = async () => {
            const articles = await fetchTopHeadlines();
            setNews(articles);
            setLoading(false);
        };
        getNews();


    }, []);


    return (
        <div className="container mx-auto p-4">
            <CategoryList/>
            <h1 className="text-3xl font-bold mb-4">Latest News</h1>
            {loading ? (
                <p className="text-center text-lg">Loading news...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news.map((article, index) => (
                        <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
                        <img src={article.urlToImage} alt="News" className="w-full h-40 object-cover rounded" />
                        <h2 className="text-xl font-semibold my-2">{article.title}</h2>
                        <p className="text-gray-600">{article.description?.slice(0,100)}...</p>
                        <Link to={`/article/${index}`} className="text-blue-500 hover:underline mt-2 inline-block">
                            Read More
                        </Link>
                    </div>
                    ))}
                    
                </div>
            )}

        </div>
    );
};