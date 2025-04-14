import { category } from "./types";

export interface Product {
    id: number,
    name: string,
    price: number,
    inStock: boolean,
    category: category
}