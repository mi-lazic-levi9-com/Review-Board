"use client";

import RouterButton from "@/components/router-button/router-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useProducts } from "@/hooks/useProducts";
import { useProductsStore } from "@/store/productsStore";
import Link from "next/link";
import { useEffect } from "react";

export default function ProductClient() {
  const { data: products, isLoading, error } = useProducts();
  const { setProducts, setSortOrder, sortedProducts, sortOrder } =
    useProductsStore();

  useEffect(() => {
    if (products?.length) {
      setProducts(products);
    }
  }, [products, setProducts]);

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Something went wrong</p>;
  if (!products?.length) return <p>No reviews found.</p>;

  const displayedProducts = sortedProducts();

  const uniqueCategories = Array.from(
    new Set(products.map((p) => p.category.name))
  );
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center">All Products</h1>

      <div className="flex justify-end flex-wrap gap-2 my-4 mx-7">
        {uniqueCategories.map((cat) => (
          <Link href={`/categories/${cat}`} key={cat}>
            <Badge
              variant={"secondary"}
              className="hover:bg-primary hover:text-white transition-colors"
            >
              {cat}
            </Badge>
          </Link>
        ))}
      </div>
      <div className="flex justify-end flex-wrap gap-2 m-7 mr-12">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Sorting {sortOrder ? sortOrder : ""}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSortOrder("asc")}>
              Rating Ascending
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortOrder("desc")}>
              Rating Descending
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortOrder(null)}>
              Clear Sorting
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-5 mr-5">
        {displayedProducts?.map((product) => (
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
                <CardDescription>
                  Rating:{" "}
                  <span className="text-primary text-bold">
                    {product.rating}
                  </span>
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
