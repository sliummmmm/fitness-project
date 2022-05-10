import axios from 'axios';

export default axios.create({
    headers: {
        'X-Api-Key': process.env.REACT_APP_API_KEY_CN
      }
});