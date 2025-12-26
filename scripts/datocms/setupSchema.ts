import { SiteClient } from "datocms-client";

const client = new SiteClient(process.env.DATOCMS_API_TOKEN!);

async function run() {
  // CATEGORY MODEL
  const category = await client.itemTypes.create({
    name: "Category",
    apiKey: "category",
  });

  // Create Name field and get its ID
  await client.fields.create(category.id, {
    label: "Name",
    apiKey: "name",
    fieldType: "string",
    validators: { required: {} },
  });

  // Use the actual field ID for titleFieldId
  await client.fields.create(category.id, {
    label: "Slug",
    apiKey: "slug",
    fieldType: "slug",
    validators: { required: {} },
    appearance: {
      editor: "slug",
      addons: [],
      parameters: { urlPrefix: "" },
    },
  });

  // PRODUCT MODEL
  const product = await client.itemTypes.create({
    name: "Product",
    apiKey: "product",
    draftModeActive: true,
  });

  // Create Name field and get its ID
  await client.fields.create(product.id, {
    label: "Name",
    apiKey: "name",
    fieldType: "string",
    validators: { required: {} },
  });

  // Use the actual field ID for titleFieldId
  await client.fields.create(product.id, {
    label: "Slug",
    apiKey: "slug",
    fieldType: "slug",
    validators: { required: {} },
    appearance: {
      editor: "slug",
      addons: [],
      parameters: { urlPrefix: "" },
    },
  });

  await client.fields.create(product.id, {
    label: "Description",
    apiKey: "description",
    fieldType: "text",
    validators: { required: {} },
  });

  await client.fields.create(product.id, {
    label: "Rating",
    apiKey: "rating",
    fieldType: "float",
    validators: {
      numberRange: { min: 0, max: 5 },
    },
  });

  await client.fields.create(product.id, {
    label: "Pros",
    apiKey: "pros",
    fieldType: "string",
    validators: {},
    fieldOptions: { listMode: true },
  });

  await client.fields.create(product.id, {
    label: "Cons",
    apiKey: "cons",
    fieldType: "string",
    validators: {},
    fieldOptions: { listMode: true },
  });

  await client.fields.create(product.id, {
    label: "Website URL",
    apiKey: "website_url",
    fieldType: "string",
  });

  await client.fields.create(product.id, {
    label: "Category",
    apiKey: "category",
    fieldType: "link",
    validators: {
      required: {},
      itemItemType: {
        itemTypes: [category.id],
      },
    },
  });

  await client.fields.create(product.id, {
    label: "Logo",
    apiKey: "logo",
    fieldType: "string",
    validators: {},
  });

  await client.fields.create(product.id, {
    label: "Published At",
    apiKey: "published_at",
    fieldType: "date_time",
    validators: {},
  });

  console.log("✅ ReviewBoard schema created");
}

run().catch(console.error);
