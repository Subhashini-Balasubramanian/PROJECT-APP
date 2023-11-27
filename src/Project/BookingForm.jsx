import React, { useState } from 'react';
import { Typography } from '@mui/material';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleclick= (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Booking submitted:', { name, checkIn, checkOut });

    // Show an alert when the form is submitted
    alert('Your room is booked!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Booking submitted:', { name, checkIn, checkOut });
  };

  return (
    <div>
         <Typography variant="h1"
        color="black"
        textAlign="center"
        fontFamily={"monospace"}>
            BOOKING
        </Typography>
        <br></br>
        <br></br>
        <br></br>
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <label style={{ display: 'block', margin: '10px 0' }}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            margin: '5px 0',
            boxSizing: 'border-box',
          }}
        />
      </label>
      <br />
      <label style={{ display: 'block', margin: '10px 0' }}>
        Check-In Date:
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            margin: '5px 0',
            boxSizing: 'border-box',
          }}
        />
      </label>
      <br />
      <label style={{ display: 'block', margin: '10px 0' }}>
        Check-Out Date:
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            margin: '5px 0',
            boxSizing: 'border-box',
          }}
        />
      </label>
      <br />
      <button 
        type="submit"
        onClick={handleclick}
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Book Now
      </button>
    </form>
    <br></br>
    <br></br>
    <br></br>
    </div>
  );
};

export default BookingForm;