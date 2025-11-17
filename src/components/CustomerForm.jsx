import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "../FormStyles.css";
import "./CustomerForm.css";
import axios from "axios";

const backendURL = "http://192.168.0.187:5000/api/customers";

const CustomerForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [custID, setCustID] = useState("");

  // ***** Phone number formatting helper *****
  const formatPhoneNumber = (input) => {
    // Remove all non-digit characters
    const cleaned = input.replace(/\D/g, "");
    // Apply formatting for 10-digit US phone numbers (e.g., XXX-XXX-XXXX)
    if (cleaned.length > 6) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(
        6,
        10
      )}`;
    } else if (cleaned.length > 3) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}`;
    }
    return cleaned;
  };

  const IDGenerator = (lname) => {
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const day = new Date().getDate();
    const first3 = lname.trim().slice(0, 3).toUpperCase();
    const custID = `${first3}${month}${day}${year}`;
    setIsVisible(true);
    return custID;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedID = IDGenerator(lastName);
    setCustID(generatedID);
    console.log("Customer ID: ", generatedID);
    // Further submission logic can be added here
    const customerData = {
      firstName,
      lastName,
      email,
      phone,
      streetAddress,
      unitNumber,
      city,
      state,
      zipCode,
      custID: generatedID,
    };
    console.log("Customer Data Submitted: ", customerData);
    axios
      .post(backendURL, customerData)
      .then((response) => {
        console.log("Customer created successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the customer!", error);
      });
  };

  return (
    <Row id className="customer-form-row-wrappe">
      {/* <Column xs={10} sm={10} md={8} lg={6} xl={6} xxl={6}> */}
      {/* <div className="col-4"></div> */}
      <Column>
        <div
          className="col-4-lg col-8-sm
       ndc-form-wrapper p-4"
        >
          <Row id="customer-form-header-row">
            <div className="col-6">
              <h2>Customer</h2>
            </div>
            <div className="col-6">
              <h3 className={isVisible ? "visible" : "invisible"}>
                <span className="badge text-bg-secondary">ID: {custID}</span>
              </h3>
            </div>
          </Row>
          {/* <Stack> */}
          <div className="row">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="pt-2" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  className=""
                  value={firstName}
                  type="text"
                  placeholder="Enter first name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="pt-2" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  className=""
                  value={lastName}
                  type="text"
                  placeholder="Enter last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="pt-2" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className=""
                  value={email}
                  type="email"
                  placeholder="Enter email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="pt-2" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  className=""
                  value={phone}
                  type="tel"
                  placeholder="Enter phone number"
                  onChange={(e) => {
                    const formattedPhone = formatPhoneNumber(e.target.value);
                    console.log("Formatted Phone: ", formattedPhone);
                    setPhone(formattedPhone);
                  }}
                />
              </Form.Group>
              <Form.Group className="pt-2" controlId="streetAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  className=""
                  value={streetAddress}
                  type="text"
                  placeholder="Enter street address"
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="pt-2" controlId="unitNumber">
                <Form.Control
                  className=""
                  value={unitNumber}
                  type="text"
                  placeholder="Enter unit number"
                  onChange={(e) => setUnitNumber(e.target.value)}
                />
              </Form.Group>

              <InputGroup className="pt-2 pb-2">
                <Form.Control
                  aria-label="City"
                  placeholder="City"
                  value={city}
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                />

                <Form.Control
                  aria-label="State"
                  placeholder="State"
                  value={state}
                  type="text"
                  onChange={(e) => setState(e.target.value)}
                />

                <Form.Control
                  aria-label="Zip Code"
                  placeholder="Zip Code"
                  value={zipCode}
                  type="text"
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </InputGroup>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          {/* </Stack> */}
        </div>
      </Column>
    </Row>
  );
};

export default CustomerForm;
