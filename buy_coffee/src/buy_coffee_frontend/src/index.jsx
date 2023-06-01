import * as React from "react";
import { render } from "react-dom";
import { Actor, HttpAgent } from '@dfinity/agent';
// import { buy_coffee_backend } from "../../declarations/buy_coffee_backend";
import { idlFactory } from '../../declarations/buy_coffee_backend/buy_coffee_backend.did.js';

const agent = new HttpAgent({ host: 'http://localhost:8000' }); // Replace with the appropriate local network URL
const canisterId = 'be2us-64aaa-aaaaa-qaabq-cai'; // Replace with the actual canister ID of your locally deployed canister
const actor = Actor.createActor(idlFactory, { agent, canisterId });

import BuyCoffeeButton from "./buyCoffee";

const MyHello = () => {
  // const [name, setName] = React.useState('');
  // const [message, setMessage] = React.useState('');

  // async function doGreet() {
  //   const greeting = await buy_coffee_backend.greet(name);
  //   setMessage(greeting);
  // }

  const handlePaymentComplete = (status) => {
    console.log('Payment status:', status);
    // Perform any necessary actions after payment completion
  };
  return (
    <div style={{ "fontSize": "30px" }}>
      {/* <div style={{ "backgroundColor": "yellow" }}>
        <p>Greetings, from DFINITY!</p>
        <p>
          {" "}
          Type your message in the Name input field, then click{" "}
          <b> Get Greeting</b> to display the result.
        </p>
      </div>
      <div style={{ margin: "30px" }}>
        <input
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button onClick={doGreet}>Get Greeting!</button>
      </div>
      <div>
        Greeting is: "
        <span style={{ color: "blue" }}>{message}</span>"
      </div> */}
      <BuyCoffeeButton coffeeType="Cappuccino" onPaymentComplete={handlePaymentComplete} actor={actor}/>
    </div>
  );
};

render(<MyHello />, document.getElementById("app"));