import { fetchCategories } from "@/lib/mockApi";
import { ICategory } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  return useQuery<ICategory[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}
