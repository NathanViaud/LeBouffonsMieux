import { defineStore } from 'pinia';
import { Food } from '@/types';
import {
    fetchFoodList,
    getAlcohol,
    getCarbohydrate,
    getEnergy,
    getLipid,
    getProtein,
    getWater,
    saveFoodList
} from '@/utils';

interface UserStore {
    foodList: Food[];
}

export const useUserStore = defineStore('user', {
    state: (): UserStore => ({
        foodList: fetchFoodList()
    }),
    
    getters: {
        getTotalEnergy: (state) => {
            return state.foodList.reduce((acc, food) => acc + getEnergy(food), 0);
        },
        getTotalWater: (state) => {
            return state.foodList.reduce((acc, food) => acc + getWater(food), 0);
        },
        getTotalCarbohydrate: (state) => {
            return state.foodList.reduce((acc, food) => acc + getCarbohydrate(food), 0);
        },
        getTotalLipid: (state) => {
            return state.foodList.reduce((acc, food) => acc + getLipid(food), 0);
        },
        getTotalProtein: (state) => {
            return state.foodList.reduce((acc, food) => acc + getProtein(food), 0);
        },
        getTotalAlcohol: (state) => {
            return state.foodList.reduce((acc, food) => acc + getAlcohol(food), 0);
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
        },
        getFood(fdcId: number): Food | undefined {
            return this.foodList.find((food: Food) => food.fdcId === fdcId);
        }
        
    }
})