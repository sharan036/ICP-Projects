import React from 'react';

const BuyCoffeeButton = ( { coffee_shop_backend, setMessage }) => {
  var message = '';
  const handleBuyCoffee = async (el) => {
    el.target.disabled = true;
    
    const hasAllowed = await window.ic?.plug?.requestConnect();
    
    if (hasAllowed) {
      el.target.textContent = "Plug wallet is connected"
      const coffeeAmount = 4000000;

      const balance = await window.ic?.plug?.requestBalance();
      console.log(balance[0]?.amount);
      if (balance[0]?.amount >= coffeeAmount) {
        el.target.textContent = "Plug wallet has enough balance"

        const requestTransferArg = {
          to: 'bkyz2-fmaaa-aaaaa-qaaaq-cai',
          amount: coffeeAmount,
        };
        const transfer = await window.ic?.plug?.requestTransfer(requestTransferArg);

        const transferStatus = transfer?.transactions?.transactions[0]?.status;

        if (transferStatus === 'COMPLETED') {
          el.target.textContent = `Plug wallet transferred ${coffeeAmount} e8s`;
          message  = await coffee_shop_backend.processPayment("Payment Sucessfull");
          // setMessage(message);
        } else if (transferStatus === 'PENDING') {
          el.target.textContent = "Plug wallet is pending.";
        } else {
          el.target.textContent = "Plug wallet failed to transfer";
        }
      } else {
        el.target.textContent = "Plug wallet doesn't have enough balance";
        message = coffee_shop_backend.processPayment("wallet doesn't have enough balance");
        // setMessage(message);
      }
    } else {
      el.target.textContent = "Plug wallet connection was refused";
    }

    setTimeout(() => {
      el.target.disabled = false;
      el.target.textContent = "Buy me a coffee"
    }, 5000);
  };

  return (
    <button id="buy-me-coffee" onClick={handleBuyCoffee}>
      Buy me a coffee
    </button>
  );
};

export default BuyCoffeeButton;