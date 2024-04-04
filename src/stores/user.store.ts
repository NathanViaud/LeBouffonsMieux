import { defineStore } from 'pinia';
import { Food } from '@/types';

interface UserStore {
    foodList: Food[];
}

export const useUserStore = defineStore('user', {
    state: (): UserStore => ({
        foodList: []
    }),
    
    actions: {
        addFood(food: Food) {
            this.foodList.push(food)
        }
    }
})