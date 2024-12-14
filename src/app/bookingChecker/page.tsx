import BookingInfo from "./booking-info";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center my-6">
        Check your booking details here
      </h1>
      <BookingInfo />
    </main>
  );
}
