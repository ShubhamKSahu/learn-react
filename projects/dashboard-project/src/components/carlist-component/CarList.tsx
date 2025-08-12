import React, { useState } from "react";
import cars from "../../data/car-data";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import type { Car } from "../../type";
import PreviewList from "./PreviewList";
import "./carlist.css";

export default function CarList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handlePreview = (car: Car) => {
    setSelectedCar(car);      
    setIsModalOpen(true);     
  };

  return (
    <div className="carlist">
      <h1>Available Cars</h1>
      <div className="car-info">
        {cars.map((car) => (
          <div key={car.id} id="carinfo">
            <img src={car.image} alt={car.name} width="200" />
            <h2>{car.name}</h2>
            <p>{car.price}</p>
            <div className="carlist-btns">
              <Link to={`/cardetails/${car.id}`}>
                <Button type="primary">View Details</Button>
              </Link>
              <Button type="primary" onClick={() => handlePreview(car)}>
                Preview
              </Button>
            </div>
          </div>
        ))}
      </div>

      
      <Modal
        title="Car Preview"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={500}
      >
        {selectedCar && (
          <PreviewList
            carinfo={{
              carid: selectedCar.id,
              carname: selectedCar.name,
              price: selectedCar.price,
              image: selectedCar.image,
              description: selectedCar.description
            }}
          />
        )}
      </Modal>
    </div>
  );
}


