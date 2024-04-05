import { SearchResultFood } from '@/types';
import { defineStore } from 'pinia';
import { search } from '@/services';

interface SearchStore {
    searchResultsFoods: SearchResultFood[];
    loading: boolean;
    totalPage: number;
    currentPage: number;
    lastQuery: string;
}

export const useSearchStore = defineStore('search', {
    state: (): SearchStore => ({
        searchResultsFoods: [],
        loading: false,
        totalPage: 0,
        currentPage: 1,
        lastQuery: ''
    }),
    
    getters: {
        getItemById: (state) => (id: number) => {
            return state.searchResultsFoods.find((item) => item.fdcId === id);
        }
    },
    
    actions: {
        async search(query: string) {
            this.loading = true;
            const searchResult = await search(query);
            
            this.totalPage = searchResult.totalPages;
            this.currentPage = searchResult.currentPage;
            this.searchResultsFoods = searchResult.foods;
            this.lastQuery = query;
            
            this.loading = false;
        },
        
        async changePage(page: number) {
            this.loading = true;
            const searchResult = await search(this.lastQuery, page);
            
            this.totalPage = searchResult.totalPages;
            this.currentPage = searchResult.currentPage;
            this.searchResultsFoods = searchResult.foods;
            
            this.loading = false;
        }
    }
})
