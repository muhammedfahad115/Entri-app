import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../Context/UserContext';
import LoadingSpinner from './LoadingSpinner';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function NewsCard({ searchQuery, language }) {
    const [newsArticles, setNewsArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const { error, setError } = useContext(Context);

    // fetching news data from the news api using axios

    useEffect(() => {
        // fetching the news data only if the search query and language are provided and not empty
        if (searchQuery && language) {
            const fetchNews = async () => {
                setLoading(true);
                try {
                    const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&language=${language}&sortBy=publishedAt&apiKey=${API_KEY}`);
                    setNewsArticles(response.data.articles);
                    if (response.data.totalResults === 0) {
                        setError('No news articles found for the search query');
                    }
                } catch (error) {
                    if (error.response && error.response.status === 404) {
                        setError('No news articles found for the search query');
                    } else {
                        console.error('Error fetching news data:', error);
                    }
                } finally {
                    setLoading(false);
                }
            };

            fetchNews();
        }
    }, [searchQuery, language, setError]);

    return (
        <>
            {loading ? (
                <div className=' pt-20 '><LoadingSpinner /></div>
            ) : (
                <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {newsArticles.map((article, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default NewsCard;
