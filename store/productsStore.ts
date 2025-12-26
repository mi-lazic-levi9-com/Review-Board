import { IProduct } from "@/types/types";
import { create } from "zustand";

type ProductsState = {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  sortOrder: "asc" | "desc" | null;
  setSortOrder: (order: "asc" | "desc" | null) => void;
  sortedProducts: () => IProduct[];
};

export const useProductsStore = create<ProductsState>((set, get) => ({
  products: [],
  sortOrder: null,
  setProducts: (products) => set({ products }),
  setSortOrder: (order) => set({ sortOrder: order }),
  sortedProducts: () => {
    const { products, sortOrder } = get();
    if (!sortOrder) return products;
    return [...products].sort((a, b) =>
      sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating
    );
  },
}));
