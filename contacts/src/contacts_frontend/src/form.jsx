import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Forma({contacts_backend}) {
  const [validated, setValidated] = useState(false);

 
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    console.log(form.checkValidity())
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }else{
        event.preventDefault();
        let name = document.getElementById("newEntryName").value;
        let add1 = document.getElementById("newEntryAddress1").value;
        let add2 = document.getElementById("newEntryAddress2").value;
        let email = document.getElementById("newEntryEmail").value;
        let phone = document.getElementById("newEntryPhone").value;
        contacts_backend.insert(name, add1, add2, email, parseInt(phone, 10));    
    }

    setValidated(true);
  };

  async function lookup() {
    let name = document.getElementById("lookupName").value;
    contacts_backend.lookup(name).then((opt_entry) => {
      let entry;

      if (opt_entry.length == 0) {
        entry = { name: "", description: "", phone: "" };
      } else {
        entry = opt_entry[0];
      }

      document.getElementById("newEntryName").value = entry.name;
      document.getElementById("newEntryAddress1").value = entry.address1;
      document.getElementById("newEntryAddress2").value = entry.address2;
      document.getElementById("newEntryEmail").value = entry.email;
      document.getElementById("newEntryPhone").value = entry.phone.toString();
    });
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="w-100">
        <h1 className='mb-5 text-center text-uppercase'>My Contacts</h1>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="name"
                defaultValue="Mark"
                id="newEntryName"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Address 1 (street): </Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="address"
                defaultValue="address 1"
                id="newEntryAddress1"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    />
                    <Form.Control.Feedback type="invalid">
                    Please choose a username.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group> */}
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Address 2 (city and state):</Form.Label>
            <Form.Control type="text" placeholder="City" required id="newEntryAddress2"/>
            <Form.Control.Feedback type="invalid">
                Please provide a valid city/ State.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="email" required id="newEntryEmail"/>
            <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
            </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label>Phone:</Form.Label>
            <Form.Control type="number" placeholder="phone" required id="newEntryPhone"/>
            <Form.Control.Feedback type="invalid">
                Please provide a valid number.
            </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Form.Group className="mb-3">
            <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
            />
        </Form.Group>
        <Button type="submit" className="me-5">Submit form</Button>
          Lookup name:{" "}
          <input id="lookupName" style={{ lineHeight: "20px" }}></input>
          <Button onClick={() => lookup()}>Lookup</Button>
    </Form>
  );
}

export default Forma;