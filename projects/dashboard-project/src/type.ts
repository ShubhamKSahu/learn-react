
export type Car = {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
};

export type BookingContextType = {
    bookings: Car[],
    addBookings: (car: Car)=> void;
}
