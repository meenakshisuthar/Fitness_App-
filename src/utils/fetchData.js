export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8e408a4bc3mshe2079c18f3ca0c2p125accjsn1e71e916d26c',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8e408a4bc3mshe2079c18f3ca0c2p125accjsn1e71e916d26c',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
     const response = await fetch(url, options)
     const  data = await response.json()
     return data
}