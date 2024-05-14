//interface for food data
export interface content {
    title: string;
    price: number;
    food: types[];
}

interface types {
    id: string;
    name: string;
    description: string;
    filename: string;
}