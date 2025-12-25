export default async function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const { categoryId } = await params;
  return (
    <>
      <h1>
        This is <span className="font-bold text-cyan-800">{categoryId}</span>{" "}
        category page.
      </h1>
    </>
  );
}
