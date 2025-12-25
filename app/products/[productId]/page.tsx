"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import RouterButton from "@/components/router-button/router-button";
import { useProduct } from "@/hooks/useProduct";
import { useParams } from "next/navigation";

export default function ProductReview() {
  const params = useParams();
  const productId = typeof params.productId === "string" ? params.productId : Array.isArray(params.productId) ? params.productId[0] : "";
  const { data: product, isLoading, isError } = useProduct(productId);

  if (isLoading) {
    return (
      <div className="text-center mt-10 text-gray-500 font-bold text-xl">
        Loading...
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="text-center mt-10 text-red-500 font-bold text-xl">
        Product not found.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Card className="max-w-xl w-full mt-5">
        <CardHeader className="flex flex-col items-center gap-2">
          {/* <Image
            fill
            src={product.logo}
            alt={product.name}
            className="w-20 h-20 object-contain rounded-lg shadow"
          /> */}
          <CardTitle className="text-2xl text-center">{product.name}</CardTitle>
          <CardDescription className="text-center">
            <RouterButton
              href={`/categories/${product.category.slug}`}
              buttonText={product.category.name}
            />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-center">{product.description}</p>
          <div className="flex justify-center gap-2 mb-4">
            <span className="font-semibold">Rating:</span>
            <span>{product.rating} / 5</span>
          </div>
          <div className="flex gap-8 justify-center">
            <div>
              <h3 className="font-bold mb-1">Pros</h3>
              <ul className="list-disc list-inside text-green-700">
                {product.pros.map((pro, idx) => (
                  <li key={idx}>{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-1">Cons</h3>
              <ul className="list-disc list-inside text-red-700">
                {product.cons.map((con, idx) => (
                  <li key={idx}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <a
            href={product.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
          >
            Visit Website
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
