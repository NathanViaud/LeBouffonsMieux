import { test, expect } from 'vitest'
import { bread } from '../mocks/food.mock';
import { createFood, getCurrentDate } from '../../src/utils';

test('createProduct', () => {
    const food = createFood(bread, 200);
    
    // the food date should be today
    expect(food.date).toBe(getCurrentDate());
})