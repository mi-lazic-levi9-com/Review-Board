"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import RouterButton from "@/components/router-button/router-button";
import { useProducts } from "@/hooks/useProducts";

// export const metadata = {
//   title: "All Products Reviews",
//   description: "Browse Products Reviews",
// };

export default function Products() {
  const { data, isLoading, error } = useProducts();
  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-5 mr-5">
        {data?.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`}>
            <Card>
              <CardHeader>
                <CardTitle className="font-bold">{product.name}</CardTitle>
                <CardDescription>
                  <RouterButton
                    href={`/categories/${product.category.slug}`}
                    buttonText={product.category.name}
                  />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{product.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
