// context/BookingsContext.jsx
import React, { createContext, useContext, useState } from 'react';
const BookingsContext = createContext();

export const BookingsProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (packageItem) => {
    setBookings((prev) => {
      const alreadyExists = prev.some(item => item.id === packageItem.id);
      return alreadyExists ? prev : [...prev, packageItem];
    });
  };

  const removeBooking = (packageId) => {
    setBookings((prev) => prev.filter((item) => item.id !== packageId));
  };

  return (
    <BookingsContext.Provider value={{ bookings, addBooking, removeBooking }}>
      {children}
    </BookingsContext.Provider>
  );
};

export const useBookings = () => useContext(BookingsContext);
