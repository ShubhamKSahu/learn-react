import React from "react";
import { useBooking } from "../../context/BookingContext";
import { Button } from "antd";

export default function BookingsList() {
  const { bookings, removeBooking, clearBookings } = useBooking();

  if (bookings.length === 0) return <p>No bookings yet.</p>;

  return (
    <div>
      <h2>My Bookings</h2>
      <Button onClick={() => clearBookings()}>Clear All</Button>
      {bookings.map(car => (
        <div key={car.id} style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
          <h3>{car.name}</h3>
          <img src={car.image} alt={car.name} width={120} />
          <p>{car.price}</p>
          <Button danger onClick={() => removeBooking(car.id)}>Remove</Button>
        </div>
      ))}
    </div>
  );
}



