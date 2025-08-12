import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BookingContext } from "../../context/BookingContext";
import cars from "../../data/car-data";

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));
  const { addBooking } = useContext(BookingContext);

  if (!car) return <p>Car not found.</p>;

  return (
    <div>
      <h2>{car.name}</h2>
      <img src={car.image} alt={car.name} />
      <p>{car.price}</p>
      <p>{car.description}</p>
      <button onClick={() => addBooking(car)}>Book Test Drive</button>
    </div>
  );
}


