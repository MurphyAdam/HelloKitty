import axios from 'axios';
import { apiKey } from '../config';

export const fetchCats = limit => 
    axios.get('https://api.thecatapi.com/v1/breeds', 
    {
        headers: {
            'X-Api-Key': apiKey
        },
        params: {
            'limit': limit,
        }
    });