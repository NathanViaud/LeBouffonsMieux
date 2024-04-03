import type { SearchResult } from '@/types';
import axios from 'axios';

const API_KEY='T2U4MjLqQ95lMhBvnPSDVgb7emXjxGwzBZqWZEdu';
const API_URL = 'https://api.nal.usda.gov/fdc/v1/foods/search';

export async function search(query: string): Promise<SearchResult[]> {
    const options = {
        method: 'GET',
        url: API_URL,
        params: {
            query: query,
            dataType: 'Foundation, SR Legacy',
            pageSize: 25,
            pageNumber: 1,
            sortBy: 'dataType.keyword',
            sortOrder: 'asc',
            api_key: API_KEY
        },
        headers: { 'accept': 'application/json' }
    }
    
    const response = await axios.request(options);
    
    return response.data.foods;
}