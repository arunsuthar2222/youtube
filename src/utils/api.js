import axios from 'axios'
// const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
        
    headers: {
      'X-RapidAPI-Key': '21a48c4203mshea4cc80a4d71281p10ac57jsn9c5bab614632',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async(url)=>{
const {data} = await axios.get(`${API_URL}/${url}`, options);
return data.items
  }