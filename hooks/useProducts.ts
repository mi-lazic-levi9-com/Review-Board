import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/mockApi";
import { IProduct } from "@/types/types";

export function useProducts() {
  return useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}
