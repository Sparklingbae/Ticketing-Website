// src/components/Payment.jsx

import React, { useState } from 'react';
import './Payment.css';

const Payment = ({ onPaymentSuccess }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Here you would integrate with a payment gateway
    console.log('Payment details:', paymentDetails);
    // Simulate payment success
    onPaymentSuccess();
  };

  return (
    <div className="payment">
      <h2>Payment</h2>
      <form onSubmit={handlePayment} className="payment-form">
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentDetails.cardNumber}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="expiryDate"
          placeholder="Expiry Date"
          value={paymentDetails.expiryDate}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentDetails.cvv}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="payment-button">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;