import { SiteClient } from "datocms-client";
import fs from "fs/promises";
import path from "path";

const client = new SiteClient(process.env.DATOCMS_API_TOKEN!);

async function seed() {
  // Load products
  const filePath = path.join(process.cwd(), "dummy_products.json");
  const products = JSON.parse(await fs.readFile(filePath, "utf-8"));

  // Get model IDs
  const categoryModel = await client.itemTypes.find("category");
  const productModel = await client.itemTypes.find("product");

  // Cache for created categories
  const categoryCache: Record<string, string> = {};

  for (const product of products) {
    const cat = product.category;

    // Create/find category
    let categoryId = categoryCache[cat.slug];
    if (!categoryId) {
      // Try to find existing category by slug
      const existing = await client.items.all({
        filter: { type: categoryModel.id, fields: { slug: { eq: cat.slug } } },
      });
      if (existing.length > 0) {
        categoryId = existing[0].id;
      } else {
        const created = await client.items.create({
          itemType: categoryModel.id,
          name: cat.name,
          slug: cat.slug,
        });
        categoryId = created.id;
      }
      categoryCache[cat.slug] = categoryId;
    }

    // Create product
    await client.items.create({
      itemType: productModel.id,
      name: product.name,
      slug: product.slug,
      description: product.description,
      rating: product.rating,
      //   pros: product.pros,
      //   cons: product.cons,
      websiteUrl: product.websiteUrl,
      category: categoryId,
      logo: product.logo,
      publishedAt: product.publishedAt,
    });

    console.log(`Seeded product: ${product.name}`);
  }
  console.log("✅ Seeding complete");
}

seed().catch(console.error);
