export const exerciseOptions = {
    method: 'GET',

    headers: {
        'X-RapidAPI-Key': '487e58a3f2msh60bb68b83ac218ap153b3ejsn40294b0e4cba',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '487e58a3f2msh60bb68b83ac218ap153b3ejsn40294b0e4cba',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}