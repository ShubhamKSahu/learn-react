// src/context/BookingContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Car } from "../type";

interface BookingContextType {
  bookings: Car[];
  addBooking: (car: Car) => void;
  removeBooking: (id: number) => void;
  clearBookings: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

/** Custom hook to safely use the context */
export const useBooking = () => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
};

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  // load from localStorage (optional)
  const [bookings, setBookings] = useState<Car[]>(() => {
    try {
      const raw = localStorage.getItem("bookings");
      return raw ? (JSON.parse(raw) as Car[]) : [];
    } catch {
      return [];
    }
  });

  // persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("bookings", JSON.stringify(bookings));
    } catch {}
  }, [bookings]);

  const addBooking = (car: Car) => {
    setBookings(prev => {
      // prevent duplicates by id
      if (prev.some(c => c.id === car.id)) return prev;
      return [...prev, car];
    });
  };

  const removeBooking = (id: number) => {
    setBookings(prev => prev.filter(c => c.id !== id));
  };

  const clearBookings = () => setBookings([]);

  return (
    <BookingContext.Provider value={{ bookings, addBooking, removeBooking, clearBookings }}>
      {children}
    </BookingContext.Provider>
  );
};




