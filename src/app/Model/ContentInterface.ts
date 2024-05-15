//interface for food data
export interface content {
    title: string;
    foodItems: types[];
}

interface types {
    id: string;
    name: string;
    price: number;
    description: string;
    filename: string;
}