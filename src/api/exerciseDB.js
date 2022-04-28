import axios from 'axios';

export default axios.create({
    baseURL:'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
      }
});