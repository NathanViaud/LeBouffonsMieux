import { defineStore } from 'pinia';
import { Food } from '@/types';

interface UserStore {
    foodList: Food[];
}

export const useUserStore = defineStore('user', {
    state: (): UserStore => ({
        foodList: []
    }),
    
    getters: {
        getEnergy: (state) => {
            let res = 0;
            for(const food of state.foodList) {
                if(!food.foodNutrients) continue;
                const energy = food.foodNutrients.find((nutrient) => nutrient.name === 'Energy' && nutrient.unitName === 'KCAL');
                if(!energy || !energy.amount) continue;
                res += energy.amount;
            }
            
            return res;
        }
    },
    
    actions: {
        addFood(food: Food) {
            this.foodList.push(food);
        }
    }
})