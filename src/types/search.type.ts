import { SearchResultFood } from '@/types/food.type.ts';

export interface SearchResult {
    totalHits: number;
    currentPage: number;
    totalPages: number;
    pageList: number[];
    foodSearchCriteria: any;
    foods: SearchResultFood[];
}