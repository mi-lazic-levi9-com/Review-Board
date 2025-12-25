export interface IProduct {
  name: string;
  slug: string;
  description: string;
  rate: number;
  pros: string[];
  cons: string[];
  websiteUrl?: string;
  productCategory: {
    id: string;
    name: string;
    slug: string;
  };
  logo: string;
  publishedAt: string;
}

export interface ICategory {
  name: string;
  slug: string;
}
