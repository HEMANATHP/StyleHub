import BookingSelector from "./BookingSelector";

export default function BookingPage() {
  return (
    <main>
      <h1>Book a Grooming Service</h1>

      <h2>Style Studio</h2>

      <p>Chennai</p>

      <h2>Services</h2>

      <ul>
        <li>Haircut</li>
        <li>Beard Trim</li>
        <li>Hair Spa</li>
      </ul>

      <BookingSelector />
    </main>
  );
}