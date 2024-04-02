export interface Nutrients {
    energy: number;
    water: number;
    protein: number;
    nitrogen: number;
    lipid: number;
}

export interface Food {
    foodCategory: string;
    fdcId: number;
    name: string;
    fdcPublished: Date;
}