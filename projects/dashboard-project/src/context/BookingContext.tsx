import React, { createContext, useState } from "react";
import BookingsList from "../components/carlist-component/BookingsList";
import type { Car, BookingContextType } from "../type";

export const BookingContext = createContext<BookingContextType>({
  bookings: [],
  addBookings: () => {} 
});

export default function BookingWrapper({ children }: { children: React.ReactNode }) {
  const [bookings, setBookings] = useState<Car[]>([]);

  function addBookings(car: Car) {
    console.log("Bookings....");
    
    setBookings((prev) => [...prev, car]);
  }

  return (
    <BookingContext.Provider value={{ bookings, addBookings }}>
      { children }
    </BookingContext.Provider>
  );
}

