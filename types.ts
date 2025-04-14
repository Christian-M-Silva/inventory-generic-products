export type category = "electronics" | "clothing" | "food"

export type InventoryItem<T> = {
    data: T,
    quantity: number
}