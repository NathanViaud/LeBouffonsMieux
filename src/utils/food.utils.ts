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
        return localStorage.getItem('foodList')
            ? JSON.parse(localStorage.getItem('foodList')!).filter((food: Food) => food.date === getCurrentDate())
            : ([] as Food[])
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

export function getEnergy(food: Food): number {
    if(!food.foodNutrients) return 0;
    const energy = food.foodNutrients.find((nutrient) => nutrient.name === 'Energy' && nutrient.unitName === 'KCAL');
    
    if(!energy || !energy.amount) return 0;
    return energy ? energy.amount / 100 * food.quantity : 0;
}

export function getWater(food: Food): number {
    if(!food.foodNutrients) return 0;
    const water = food.foodNutrients.find((nutrient) => nutrient.name === 'Water');
    
    if(!water || !water.amount) return 0;
    return water ? water.amount / 100 * food.quantity : 0;
}

export function getCarbohydrate(food: Food): number {
    if(!food.foodNutrients) return 0;
    const carbo = food.foodNutrients.find((nutrient) => nutrient.name === 'Carbohydrate, by difference');
    
    if(!carbo || !carbo.amount) return 0;
    return carbo ? carbo.amount / 100 * food.quantity : 0;
}

export function getLipid(food: Food): number {
    if(!food.foodNutrients) return 0;
    const lipid = food.foodNutrients.find((nutrient) => nutrient.name === 'Total lipid (fat)');
    
    if(!lipid || !lipid.amount) return 0;
    return lipid ? lipid.amount / 100 * food.quantity : 0;
}

export function getProtein(food: Food): number {
    if(!food.foodNutrients) return 0;
    const protein = food.foodNutrients.find((nutrient) => nutrient.name === 'Protein');
    
    if(!protein || !protein.amount) return 0;
    return protein ? protein.amount / 100 * food.quantity : 0;
}

export function getAlcohol(food: Food): number {
    if(!food.foodNutrients) return 0;
    const alcohol = food.foodNutrients.find((nutrient) => nutrient.name === 'Alcohol, ethyl');
    
    if(!alcohol || !alcohol.amount) return 0;
    return alcohol ? alcohol.amount / 100 * food.quantity : 0;
}