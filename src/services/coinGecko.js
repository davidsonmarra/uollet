import axios from 'axios';

const apiCoinGecko = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export default apiCoinGecko;