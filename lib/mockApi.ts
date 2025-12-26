import products from "@/dummy_products.json";
import { IProduct, ICategory } from "@/types/types";
import { datocmsClient } from "./datocms";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchProducts(): Promise<IProduct[]> {
  const query = `
 query AllProducts {
  allProducts {
    name
    description
    slug
    websiteUrl
    rating
    category {
      name
      slug
    }
  }
}
  `;
  const { allProducts } = await datocmsClient.request(query);
  return allProducts;
}

export async function fetchCategories(): Promise<ICategory[]> {
  const query = `
 query AllCategories {
allCategories {
    name
    slug
    id
}
}
  `;
  const { allCategories } = await datocmsClient.request(query);
  return allCategories;
}

export async function fetchProductBySlug(
  slug: string
): Promise<IProduct | undefined> {
  await delay(300);
  return (products as IProduct[]).find((product) => product.slug === slug);
}

export async function fetchProductsByCategory(
  categorySlug: string
): Promise<IProduct[]> {
  await delay(300);
  return (products as IProduct[]).filter(
    (product) => product.category.slug === categorySlug
  );
}
