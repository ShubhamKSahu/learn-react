import React, { createContext, useState, ReactNode } from "react";

export type BookingContextType = {
  bookings: Car[];
  addBooking: (car: Car) => void;
};


export const BookingContext = createContext<BookingContextType | undefined>(undefined);

type BookingProviderProps = {
  children: ReactNode;
};

export const BookingProvider = ({ children }: BookingProviderProps) => {
  const [bookings, setBookings] = useState<Car[]>([]);

  const addBooking = (car: Car) => {
    setBookings((prev) => [...prev, car]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};



