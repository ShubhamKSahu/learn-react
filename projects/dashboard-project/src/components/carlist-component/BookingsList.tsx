import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookingContext } from "../../context/BookingContext";

export default function BookingsList() {
  const { bookings } = useContext(BookingContext)!; // Non-null because inside BookingProvider

  if (bookings.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Your Bookings</h1>
        <p>No cars booked yet.</p>
        <Link to="/carlist">Go to Car List</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Bookings</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {bookings.map((car) => (
          <div
            key={car.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              width: "220px",
            }}
          >
            <img src={car.image} alt={car.name} width="200" />
            <h2>{car.name}</h2>
            <p>{car.price}</p>
          </div>
        ))}
      </div>
      <br />
      <Link to="/carlist">Book More Cars</Link>
    </div>
  );
}


