import  { useState } from 'react'

function SearchForm({ onSearch }) {
    const [query, setQuery] = useState('');
    const [language, setLanguage] = useState('en');

    // handleSubmit function for handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query, language);
    }; 
  return (
    <>
     <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter search query..."
                className="p-2 border outline-gray-500 border-gray-300 rounded-md flex-1"
            />
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="p-2 border  border-gray-300 rounded-md md:w-auto"
            >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Search</button>
        </form>

    </>
  )
}

export default SearchForm