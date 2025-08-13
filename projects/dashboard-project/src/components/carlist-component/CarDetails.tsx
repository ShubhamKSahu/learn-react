import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import cars from "../../data/car-data";
import { Button } from "antd";
import { BookingContext } from "../../context/BookingContext";

export default function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const { addBookings } = useContext(BookingContext);
  const navigate = useNavigate();

  if (!id) return <p>Invalid car ID.</p>;

  const car = cars.find((c) => c.id === Number(id));

  if (!car) return <p>Car not found.</p>;

  return (
    <div>
      <h2>{car.name}</h2>
      <img src={car.image} alt={car.name} />
      <p>{car.price}</p>
      <p>{car.description}</p>
       <Button
    type="primary"
    onClick={() => {
      addBookings(car);
      navigate("/bookings"); 
    }}
  >
    Book Test Drive
  </Button>
    </div>
  );
}



