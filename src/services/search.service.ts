import type { SearchParams, SearchResult } from '@/types';
import axios from 'axios';

const API_KEY='T2U4MjLqQ95lMhBvnPSDVgb7emXjxGwzBZqWZEdu';
const API_URL = 'https://api.nal.usda.gov/fdc/v1/foods/search';

export async function search(query: string): Promise<SearchResult[]> {
    console.log('searching for', query);
    const params: SearchParams = {
        query,
        startDate:'2021-01-01',
        endDate: '2021-12-31'
    }
    
    const response = await axios.post(`${API_URL}?api_key=${API_KEY}`, params);
    
    console.log(response.data);
    return response.data.foods;
}