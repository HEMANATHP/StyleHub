import Link from "next/link";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h2>StyleHub Customer</h2>

        <nav>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/shops">Shops</Link>
          <Link href="/booking">Booking</Link>
        </nav>

        <hr />
      </header>

      {children}
    </div>
  );
}