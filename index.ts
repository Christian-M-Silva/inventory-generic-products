import { Product } from "./interfaces";
import { InventoryItem } from "./types";

function sumStockProduct<T>(inventoryItens: InventoryItem<Product>[]): number {
  const total: number = inventoryItens.reduce(
    (accumulator: number, product: InventoryItem<Product>) =>
      accumulator + product.quantity,
    0
  );

  return total;
}

const itens: InventoryItem<Product>[] = [
  {
    data: {
      category: "clothing",
      id: 1,
      inStock: false,
      name: "Camisa",
      price: 1,
    },
    quantity: 1,
  },
  {
    data: {
      category: "electronics",
      id: 2,
      inStock: true,
      name: "PC",
      price: 1,
    },
    quantity: 1,
  },
  {
    data: {
      category: "food",
      id: 3,
      inStock: false,
      name: "Hamburguer",
      price: 1,
    },
    quantity: 1,
  },
];

console.log(sumStockProduct(itens))
