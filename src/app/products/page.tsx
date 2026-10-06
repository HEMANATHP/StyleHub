type Product = {
  id: number;
  title: string;
  price: number;
};

type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export default async function ProductsPage() {
  const response = await fetch(
    "https://dummyjson.com/products",
    {
        next:{revalidate:60,}
    }
  );

  const data: ProductsResponse = await response.json();

  return (
    <main>
      <h1>Products</h1>

      {data.products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>₹{product.price}</p>
        </div>
      ))}
    </main>
  );
}