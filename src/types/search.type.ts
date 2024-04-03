export interface SearchResult {
    ndbNumber: number;
    description: string;
    publishedDate: string;
    foodCategory: string;
}

type dataType = 'Branded' | 'Foundation' | 'Survey (FNDDS)' | 'SR Legacy';
type sort = 'dataType.keyword' | 'lowercaseDescription.keyword' | 'fdcId' | 'publishedDate';
type tradeChannel = 'CHILD_NUTRITION_FOOD_PROGRAMS' | 'DRUG' | 'FOOD_SERVICE' | 'GROCERY' | 'MASS_MERCHANDISING' | 'MILITARY' | 'ONLINE' | 'VENDING';
export interface SearchParams {
    query: string;
    dataType?: dataType[];
    pageSize?: number;
    pageNumber?: number;
    sortBy?: sort;
    sortOrder?: 'asc' | 'desc';
    brandOwner?: string;
    tradeChannel?: tradeChannel[];
    startDate: string;
    endDate: string;
}