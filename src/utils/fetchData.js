export const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a61df14f72msh14ad3f79985e2a2p1a983djsne6647bb3686d',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a61df14f72msh14ad3f79985e2a2p1a983djsne6647bb3686d',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

 export const fetchData=async (url,options)=>{
    console.log(options)
    console.log(url)
    const response= await fetch(url,options)
    console.log(response)
    const data=await response.json()
    return data
}

