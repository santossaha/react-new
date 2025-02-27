import { Link } from 'react-router-dom';
import { useState } from "react";
import { fetchNewsBykeyword } from '../services/newsService';

export default function Search() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);

    const handelSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const articles = await fetchNewsBykeyword(query);
        setNews(articles);
        setLoading(false);
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Search News</h1>
            <form onSubmit={handelSubmit} className="mb-4">
                <input
                    type="text"
                    placeholder="type.. business, entertainment, general, health, science, sports, technology"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border p-2 w-full rounded"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
                    Search
                </button>
            </form>

            {loading ? (<p className="text-lg text-center">Loading News...</p>) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news.map((article, index) => (
                        <div className="bg-white shadow-lg p-4 rounded-lg">
                            <img src={article.urlToImage} alt="News" className="w-full h-40 object-cover rounded" />
                            <h2 className="text-xl font-semibold my-2">{article.title}</h2>
                            <p className="text-gray-600">{article.description?.split(0,100)}...</p>
                            <Link to={article.url} target="_blank" className="text-blue-500 hover:underline mt-2 inline-block">
                                Read More
                            </Link>
                        </div>
                     ))} 
                </div>
            )}
        </div>
    )
}