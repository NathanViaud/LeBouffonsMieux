import { describe, beforeEach, it } from 'vitest';
import { bread, cheddar } from '../mocks/food.mock';
import { useUserStore } from '../../src/stores/user.store';
import { setActivePinia, createPinia } from 'pinia';

describe('User store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })
    
    it('add Item to foodList', async() => {
        const userStore = useUserStore();
        userStore.addFood(bread);
        
        expect(userStore.foodList).toEqual([bread]);
    })
    
    it('getEnergy', async() => {
        const userStore = useUserStore();
        userStore.addFood(bread);
        userStore.addFood(cheddar);
        
        expect(userStore.getEnergy).toBe(662);
    })
})