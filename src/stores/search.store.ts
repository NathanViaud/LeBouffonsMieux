import { SearchResult } from '@/types';
import { defineStore } from 'pinia';
import { search } from '@/services';

interface SearchStore {
    searchResults: SearchResult[];
    loading: boolean;
}

export const useSearchStore = defineStore('search', {
    state: (): SearchStore => ({
        searchResults: [],
        loading: false
    }),
    
    actions: {
        async search(query: string) {
            this.loading = true;
            this.searchResults = await search(query);
            this.loading = false;
        }
    }
})