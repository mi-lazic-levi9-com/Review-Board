import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import ProductClient from "./productClient";
import { queryClient } from "@/lib/queryClient";
import { fetchProducts } from "@/lib/mockApi";

export const metadata = {
  title: "All Products Reviews",
  description: "Browse Products Reviews",
};

export default async function Products() {
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductClient />
    </HydrationBoundary>
  );
}
