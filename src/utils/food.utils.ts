import { Food, SearchResultFood } from '@/types';
import { getCurrentDate } from '@/utils/date.utils.ts';

export function createFood(result: SearchResultFood, quantity: number): Food {
    return {
        ...result,
        quantity,
        date: getCurrentDate()
    }
}