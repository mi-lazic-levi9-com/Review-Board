import { useQuery } from "@tanstack/react-query";
import { fetchProductBySlug } from "@/lib/mockApi";
import { IProduct } from "@/types/types";

export function useProduct(slug: string) {
  return useQuery<IProduct | undefined>({
    queryKey: ["product", slug],
    queryFn: () => fetchProductBySlug(slug),
    enabled: !!slug,
  });
}
