import { useContext, useEffect, useState } from 'react';
import { Context } from '../Context/UserContext';

function SearchForm({ onSearch }) {
    const [query, setQuery] = useState('');
    const [language, setLanguage] = useState('en');
    const { error, setError } = useContext(Context);

    useEffect(() => {
        setError(null);
    }, [query, language]);

    useEffect(() => {
        if (error) {
            console.log(error);
            setTimeout(() => {
                setError(null);
            }, 3000);
        }
    }, [error]);

    // handleSubmit function for handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query, language);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8 sm:gap-4 relative">
                <div className='flex-1'>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Enter search query..."
                        className="p-2 border w-full outline-gray-500 border-gray-300 rounded-md"
                    />
                    <div className={` top-full -mt-1 p-2 bg-gray-400 text-white font-semibold transition-transform duration-500 ${error ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0'}`}>
                        {error}
                    </div>
                </div>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md md:w-auto"
                >
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                </select>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Search</button>
            </form>
        </>
    );
}

export default SearchForm;
