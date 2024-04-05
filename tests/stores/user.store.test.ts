import { expect, describe, beforeEach, it } from 'vitest';
import { bread, cheddar } from '../mocks/food.mock';
import { useUserStore } from '../../src/stores/user.store';
import { setActivePinia, createPinia } from 'pinia';
import { createFood } from '../../src/utils';

describe('User store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        
        // reset foodList before testing
        const userStore = useUserStore();
    })
    
    it('add Item to foodList', async() => {
        const userStore = useUserStore();
        
        const breadFood = createFood(bread, 200);
        
        userStore.addFood(breadFood);
        
        expect(userStore.foodList).toEqual([breadFood]);
    })
    
    it('getEnergy', async() => {
        const userStore = useUserStore();
        
        const breadFood = createFood(bread, 200);
        const cheddarFood = createFood(cheddar, 200);
        
        userStore.addFood(breadFood);
        userStore.addFood(cheddarFood);
        
        expect(userStore.getEnergy).toBe(254 * 2 + 408 * 2);
    })
    
    it('getWater', async() => {
        const userStore = useUserStore();
        
        const breadFood = createFood(bread, 200);
        const cheddarFood = createFood(cheddar, 200);
        
        userStore.addFood(breadFood);
        userStore.addFood(cheddarFood);
        
        expect(userStore.getWater).toBe(36.6 * 2 + 38.7 * 2);
    })
    
    it('getCarbohydrate', async() => {
        const userStore = useUserStore();
        
        const breadFood = createFood(bread, 200);
        const cheddarFood = createFood(cheddar, 200);
        
        userStore.addFood(breadFood);
        userStore.addFood(cheddarFood);
        
        expect(userStore.getCarbohydrate).toBe(2.44 * 2 + 43.1 * 2);
    })
    
    it('getLipid', async() => {
        const userStore = useUserStore();
        
        const breadFood = createFood(bread, 200);
        const cheddarFood = createFood(cheddar, 200);
        
        userStore.addFood(breadFood);
        userStore.addFood(cheddarFood);
        
        expect(userStore.getLipid).toBe(3.55 * 2 + 34 * 2);
    })
    
    it('getProtein', async() => {
        const userStore = useUserStore();
        
        const breadFood = createFood(bread, 200);
        const cheddarFood = createFood(cheddar, 200);
        
        userStore.addFood(breadFood);
        userStore.addFood(cheddarFood);
        
        expect(userStore.getProtein).toBe(12.3 * 2 + 23.3 * 2);
    
    })
    
    it('getAlcohol', async() => {
        const userStore = useUserStore();
        
        const breadFood = createFood(bread, 200);
        const cheddarFood = createFood(cheddar, 200);
        
        userStore.addFood(breadFood);
        userStore.addFood(cheddarFood);
        
        expect(userStore.getAlcohol).toBe(0);
    })
})
