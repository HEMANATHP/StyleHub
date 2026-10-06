type Props = {
  params: Promise<{
    shopId: string;
  }>;
};

export default async function ShopDetailsPage({ params }: Props) {
  const { shopId } = await params;

  return (
    <main>
      <h1>Shop Details</h1>
      <p>Shop ID: {shopId}</p>
    </main>
  );
}