import { SiteClient } from "datocms-client";

const client = new SiteClient(process.env.DATOCMS_API_TOKEN!);

// Get Product model ID
const productModel = await client.itemTypes.find("product");

// Get all fields for Product model
const fields = await client.fields.all(productModel.id);

const prosField = fields.find((f: { apiKey: string }) => f.apiKey === "pros");
const consField = fields.find((f: { apiKey: string }) => f.apiKey === "cons");

if (prosField) {
  await client.fields.update(prosField.id, {
    fieldOptions: { listMode: true },
    multiple: true,
  });
  console.log("✅ Updated 'pros' field to list mode");
} else {
  console.log("❌ 'pros' field not found");
}
if (consField) {
  await client.fields.update(consField.id, {
    fieldOptions: { listMode: true },
    multiple: true,
  });
  console.log("✅ Updated 'cons' field to list mode");
} else {
  console.log("❌ 'cons' field not found");
}

console.log(
  "✅ Updated 'pros' and 'cons' fields to multiple true and listmode true"
);
