import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // /videos, /search, /images
    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headrs: {
                'X-RapidAPI-Key': 'e826717379msh5e37e2c81fb6ed0bp1e7a78jsn7b1b1f7826bc',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
	        }
        });
        const data = await response.json();
        

        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isloading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)