import { fetchCategories } from "@/lib/mockApi";
import CategoriesClientPage from "./categoriesClient";
import { queryClient } from "@/lib/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export const metadata = {
  title: "All Categories",
  description: "Browse Categories",
};

export default async function Categories() {
  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CategoriesClientPage />;
    </HydrationBoundary>
  );
}
