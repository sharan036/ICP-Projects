import React, { useState } from 'react';

function BuyCoffeeButton({ coffeeType, onPaymentComplete, actor }) {
    const [paymentStatus, setPaymentStatus] = useState('');
    console.log(actor);
    const handleBuyCoffee = async () => {
      try {
        // Call the Motoko backend to process the payment
        const response = await actor.processPayment(coffeeType);
  
        // Update the payment status
        setPaymentStatus(response);
  
        // Invoke the callback function to notify the parent component
        onPaymentComplete(response);
      } catch (error) {
        console.error(error);
        setPaymentStatus('Error processing payment');
      }
    };
  
    return (
      <div>
        <button onClick={handleBuyCoffee}>Buy Coffee</button>
        <div>{paymentStatus}</div>
      </div>
    );
  }
  
  export default BuyCoffeeButton;