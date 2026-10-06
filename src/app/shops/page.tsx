import Link from "next/link";

type Shop = {
  id: number;
  name: string;
  city: string;
};

export default async function ShopsPage() {
  const response = await fetch("http://localhost:3000/api/shops");

  const shops: Shop[] = await response.json();

  return (
    <main>
      <h1>Grooming Shops</h1>

      {shops.map((shop) => (
        <div key={shop.id}>
          <h2>{shop.name}</h2>
          <p>{shop.city}</p>

          <Link href={`/shops/${shop.id}`}>
            View Shop
          </Link>
        </div>
      ))}
    </main>
  );
}