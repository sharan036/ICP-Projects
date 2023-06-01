import * as React from "react";
import { render } from "react-dom";
import { coffee_shop_backend } from "../../declarations/coffee_shop_backend";
import BuyCoffeeButton from "./Buymeacoffee";

const MyHello = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function doGreet() {
    const greeting = await coffee_shop_backend.greet(name);
    setMessage(greeting);
  }

  return (
    <>
      <div style={{ "fontSize": "30px" }}>
        <div style={{ "backgroundColor": "yellow" }}>
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
        </div>
      </div>
      <BuyCoffeeButton coffee_shop_backend={coffee_shop_backend} setMessage={setMessage}/>
    </>
  );
};

render(<MyHello />, document.getElementById("app"));