import { defineStore } from 'pinia';
import { Food } from '@/types';
import { fetchFoodList, saveFoodList } from '@/utils';

interface UserStore {
    foodList: Food[];
}

export const useUserStore = defineStore('user', {
    state: (): UserStore => ({
        foodList: fetchFoodList()
    }),
    
    getters: {
        getEnergy: (state) => {
            let res = 0;
            for(const food of state.foodList) {
                if(!food.foodNutrients) continue;
                const energy = food.foodNutrients.find((nutrient) => nutrient.name === 'Energy' && nutrient.unitName === 'KCAL');
                if(!energy || !energy.amount) continue;
                res += energy.amount / 100 * food.quantity;
            }
            return res;
        },
        getWater: (state) => {
            let res = 0;
            for(const food of state.foodList) {
                if(!food.foodNutrients) continue;
                const water = food.foodNutrients.find((nutrient) => nutrient.name === 'Water');
                if(!water || !water.amount) continue;
                res += water.amount / 100 * food.quantity;
            }
            return res;
        },
        getCarbohydrate: (state) => {
            let res = 0;
            for(const food of state.foodList) {
                if(!food.foodNutrients) continue;
                const carbo = food.foodNutrients.find((nutrient) => nutrient.name === 'Carbohydrate, by difference');
                if(!carbo || !carbo.amount) continue;
                res += carbo.amount / 100 * food.quantity;
            }
            return res;
        },
        getLipid: (state) => {
            let res = 0;
            for(const food of state.foodList) {
                if(!food.foodNutrients) continue;
                const lipid = food.foodNutrients.find((nutrient) => nutrient.name === 'Total lipid (fat)');
                if(!lipid || !lipid.amount) continue;
                res += lipid.amount / 100 * food.quantity;
            }
            return res;
        },
        getProtein: (state) => {
            let res = 0;
            for(const food of state.foodList) {
                if(!food.foodNutrients) continue;
                const protein = food.foodNutrients.find((nutrient) => nutrient.name === 'Protein');
                if(!protein || !protein.amount) continue;
                res += protein.amount / 100 * food.quantity;
            }
            return res;
        },
        getAlcohol: (state) => {
            let res = 0;
            for(const food of state.foodList) {
                if(!food.foodNutrients) continue;
                const alcohol = food.foodNutrients.find((nutrient) => nutrient.name === 'Alcohol, ethyl');
                if(!alcohol || !alcohol.amount) continue;
                res += alcohol.amount / 100 * food.quantity;
            }
            return res;
        }
    },
    
    actions: {
        saveFoodList() {
            saveFoodList(this.foodList);
        },
        
        addFood(food: Food) {
            this.foodList.push(food);
            this.saveFoodList();
        },
        deleteFood(food: Food) {
            const index = this.foodList.findIndex((item: Food) => item.fdcId === food.fdcId);
            if (index !== -1) {
              this.foodList.splice(index, 1);
              this.saveFoodList();
            }
          }
          
    }
})