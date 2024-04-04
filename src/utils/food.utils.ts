export function createFood(result: SearchResultFood, quantity: number): Food {
    return {
        ...result,
        quantity,
        date: new Date().toISOString().split('T')[0]
    }
}