export interface AbridgedFoodNutrients {
    number?: number;
    name?: string;
    amount?: number;
    unitName?: string;
    derivationCode?: string;
    derivationDescription?: string;
}

export interface SearchResultFood {
    fdcId: number;
    dataType?: string;
    description: string;
    foodCode?: string;
    foodNutrients?: AbridgedFoodNutrients[];
    publicationDate: string;
    scientificName?: string;
    brandOwner?: string;
    gtinUpc?: string;
    ingredients?: string;
    ndbNumber?: number;
    additionnalDescriptions?: string;
    allHighlightFields?: string;
    score?: number;
    
    publishedDate?: string;
    foodCategory?: string;
}
