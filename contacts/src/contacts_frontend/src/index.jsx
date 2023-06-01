import * as React from "react";
import { render } from "react-dom";
import { contacts_backend } from "../../declarations/contacts_backend";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/mycontacts.css";
import App from "./app";
import CarouselActive from "./Carousel";
import Forma from "./form";
const Contact = () => {
  return (
    <>
      <App/>
      <CarouselActive/>
      <div className="container pb-5 pt-5"> 
        <div className="d-flex justify-content-center">
          <Forma contacts_backend={contacts_backend}/>
        </div> 
      </div>
    </>
  );
};

document.title = "DFINITY CONTACT EXAMPLE";

render(<Contact />, document.getElementById("contacts"));