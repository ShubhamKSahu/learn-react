import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import cars from "../../data/car-data";
import { Button } from "antd";
import { useBooking } from "../../context/BookingContext";

export default function CarDetails() {
  const { id } = useParams();
  const { addBooking } = useBooking();
  const car = cars.find((c) => c.id === parseInt(id));
  

  if (!car) return <p>Car not found.</p>;

  return (
    <div>
      <h2>{car.name}</h2>
      <img src={car.image} alt={car.name} />
      <p>{car.price}</p>
      <p>{car.description}</p>
      <Button type="primary" onClick={() => addBooking(car)}>Book Test Drive</Button>
    </div>
  );
}


