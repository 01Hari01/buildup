export const exerciseOptions={
    method:'GET',
    headers:{
        'X-RapidAPI-Key': '748b10fc51msh07c9080cef1cbd0p1b5132jsne8f523de8d24',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
    method: 'GET',

    headers: {
        'X-RapidAPI-Key': '748b10fc51msh07c9080cef1cbd0p1b5132jsne8f523de8d24',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData=async (url,options)=>{
    const response=await fetch(url,options)
    return  await response.json()
}