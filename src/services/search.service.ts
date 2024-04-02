import type { SearchParams, SearchResult } from '@/types';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY;
const API_URL = 'https://api.nal.usda.gov/fdc/v1/foods/search';

export async function search(query: string): SearchResult[] {
    const params: SearchParams = {
        query,
        startDate:'2021-01-01',
        endDate: '2021-12-31'
    }
    
    const response = await axios.post(`${API_URL}?api_key=${API_KEY}`, params);
    
    console.log(response.data);
    return response.data.foods;
}