"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useCategories } from "@/hooks/useCategories";
import Link from "next/link";

export default function CategoriesClientPage() {
  const { data, isLoading, isError } = useCategories();

  if (isLoading) return <p>Loading categories...</p>;
  if (isError) return <p>Something went wrong</p>;
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center">All Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-5 mr-5">
        {!data?.length && <p>No categories found.</p>}
        {data?.map((category) => (
          <Link key={category.slug} href={`/categories/${category.slug}`}>
            <Card>
              <CardHeader>
                <CardTitle className="font-bold">{category.name}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
