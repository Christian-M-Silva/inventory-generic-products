import { Product } from "./interfaces";
import { InventoryItem } from "./types";

function sumStockProduct<T>(inventoryItens:InventoryItem<Product>[]): number {
    const total: number = inventoryItens.reduce((accumulator: number, product: InventoryItem<Product>) => accumulator + product.quantity, 0);

    return total
}

