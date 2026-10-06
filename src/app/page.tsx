import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to StyleHub</h1>
      <p>Your grooming and style marketplace.</p>
      <div>
        <Link href="/shops">Find Shops</Link>
      </div>{" "}
    </main>
  );
}
