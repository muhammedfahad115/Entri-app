import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function NewsCard({searchQuery, language}) {
    const [newsArticles, setNewsArticles] = useState([])


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&language=${language}&sortBy=publishedAt&apiKey=${API_KEY}`);
                setNewsArticles(response.data.articles);
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };

        fetchNews();
    }, [searchQuery, language]);
  return (
    <>
         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
                </div>
            ))}
        </div>
    </>
  )
}

export default NewsCard