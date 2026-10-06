export default function ShopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>
        <h2>StyleHub Shops</h2>
        <hr />
      </header>

      {children}
    </section>
  );
}