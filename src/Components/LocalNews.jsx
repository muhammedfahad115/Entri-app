import { useState } from 'react'
import SearchForm from './SearchForm';
import NewsCard from './NewsCard';

function LocalNews() {
    const [searchQuery, setSearchQuery] = useState('');
    const [language, setLanguage] = useState('en');

    const handleSearch = (query, lang) => {
        setSearchQuery(query);
        setLanguage(lang);
    };


    return (
        <>
            <div>
                <h2 className="text-2xl font-bold mb-2">News Articles</h2>

                {/* Search form for local news articles  */}
                <SearchForm onSearch={handleSearch} /> 

                {/* News card for local news articles */}
                <NewsCard searchQuery={searchQuery} language={language} />
            </div>
        </>
    )
}

export default LocalNews