import { expect, describe, beforeEach, it } from 'vitest';
import { bread, cheddar } from '../mocks/food.mock';
import { useUserStore } from '../../src/stores/user.store';
import { setActivePinia, createPinia } from 'pinia';
import { createFood } from '../../src/utils';

describe('User store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })
    
    it('add Item to foodList', async() => {
        const userStore = useUserStore();
        
        const breadFood = createFood();
        
        userStore.addFood(breadFood);
        
        expect(userStore.foodList).toEqual([breadFood]);
    })
    
    it('getEnergy', async() => {
        const userStore = useUserStore();
        
        const breadFood = createFood(bread, 200);
        const cheddarFood = createFood(cheddar, 200);
        
        userStore.addFood(breadFood);
        userStore.addFood(cheddarFood);
        
        expect(userStore.getEnergy).toBe(662 * 2);
    })
})