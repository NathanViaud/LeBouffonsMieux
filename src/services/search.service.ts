import axios from 'axios';
import { SearchResultFood } from '@/types';

const API_KEY= import.meta.env.VITE_API_KEY;
const API_URL = 'https://api.nal.usda.gov/fdc/v1/foods/search';

/**
 * Search for foods containing the query string
 * @param query
 */
export async function search(query: string): Promise<SearchResultFood[]> {
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

/**
 * Fetch a food item by its ID
 * @param id
 */
export async function fetchItemById(id: number): Promise<SearchResultFood> {
    const options = {
        method: 'GET',
        url: `https://api.nal.usda.gov/fdc/v1/food/${id}`,
        params: {
            format: 'abridged',
            api_key: API_KEY
        },
        headers: { 'accept': 'application/json' }
    }
    
    const response = await axios.request(options);
    
    return response.data;
}