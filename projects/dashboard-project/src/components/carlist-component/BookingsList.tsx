import { BookingContext } from "../../context/BookingContext";
import React, { useContext } from "react";
import cars from "../../data/car-data";

export default function BookingsList() {
  const { bookings } = useContext(BookingContext);
console.log("Bookings from context:", bookings);

  return (
    <>
      {bookings.map((car) => (
        <div key={car.id}>
          <h1>{car.name}</h1>
          <p>{car.price}</p>
          <p>{car.description}</p>
        </div>
      ))}
    </>
  );
}






