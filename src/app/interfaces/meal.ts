export interface Meal {
    mealId: string;
    desc: string;
    priceRange: {
        min: number;
        max: number;
        jump: number;
    };
    currency: string;
}
