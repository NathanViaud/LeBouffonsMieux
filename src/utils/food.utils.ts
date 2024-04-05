import { Food, SearchResultFood } from '@/types';
import { getCurrentDate } from '@/utils/date.utils.ts';

/**
 * Create a food object from a search result, by adding the quantity & the creation date
 * @param result
 * @param quantity
 */
export function createFood(result: SearchResultFood, quantity: number): Food {
    return {
        ...result,
        quantity,
        date: getCurrentDate()
    }
}

/**
 * Fetch food list from localStorage, returns empty array when localStorage is not available (testing)
 * @returns {Food[]} food list
 */
export function fetchFoodList(): Food[] {
    try {
        return localStorage.getItem('foodList') ? JSON.parse(localStorage.getItem('foodList')!) : ([] as Food[])
    } catch {
        // return empty array when localStorage is not available (testing)
        return [];
    }
}

/**
 * Save food list to localStorage
 * @param foodList
 */
export function saveFoodList(foodList: Food[]): void {
    try {
        localStorage.setItem('foodList', JSON.stringify(foodList));
    } catch(e) {
        // return when localStorage is not available (testing)
        return
    }
}