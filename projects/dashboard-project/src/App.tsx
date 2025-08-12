import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/login-component/Login";
import Dashboard from "./components/dashboard-component/Dashboard";
import CarList from "./components/carlist-component/CarList";
import CarDetails from "./components/carlist-component/CarDetails";
import BookingsList from "./components/carlist-component/BookingsList";
import { BookingProvider } from "./context/BookingContext";

function App() {
  return (
    <BookingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/carlist" element={<CarList />} />
          <Route path="/cardetails/:id" element={<CarDetails />} />
          <Route path="/bookings" element={<BookingsList />} />
        </Routes>
      </Router>
    </BookingProvider>
  );
}

export default App;
