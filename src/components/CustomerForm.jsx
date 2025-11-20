import { useState, useEffect } from "react";
// React Bootstrap Components
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Toast from "react-bootstrap/Toast";
import Modal from "react-bootstrap/Modal";
// CSS
import "../FormStyles.css";
import "./CustomerForm.css";
import axios from "axios";

const backendURL = "http://192.168.0.187:5000/api/customers";

const DEBUG_MODE = true;

const CustomerForm = ({ showForm }) => {
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
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCloseToast = () => setShowToast(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [validated, setValidated] = useState(false);

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

  const handleClearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setStreetAddress("");
    setUnitNumber("");
    setCity("");
    setState("");
    setZipCode("");
    setIsVisible(false);
    setCustID("");
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    setValidated(true);
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    const generatedID = IDGenerator(lastName);
    setCustID(generatedID);
    if (DEBUG_MODE) {
      console.log("Customer ID: ", generatedID);
    }
    // Further submission logic can be added here
    const customerData = {
      customer: {
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
      },
      repairTickets: [],
    };
    if (DEBUG_MODE) {
      console.log("Customer Data Submitted: ", customerData);
    }
    axios
      .post(backendURL, customerData)
      .then((response) => {
        if (DEBUG_MODE) {
          console.log("Customer created successfully:", response.data);
        }
        // setToastMessage("Customer created successfully!");
        // setShowToast(true);
        handleShowModal(true);
        setTimeout(() => {
          handleCloseModal();
        }, 3000);
        // handleClearForm();
      })
      .catch((error) => {
        console.error("There was an error creating the customer!", error);
      });
  };

  const handleGetCustomers = () => {
    axios
      .get(backendURL)
      .then((response) => {
        if (DEBUG_MODE) {
          console.log("Customers retrieved successfully:", response.data);
        }
      })
      .catch((error) => {
        console.error("There was an error retrieving the customers!", error);
      });
  };

  return (
    <Row
      id
      className="customer-form-row-wrapper "
      style={{ display: showForm ? "block" : "none" }}
    >
      {/* <Column xs={10} sm={10} md={8} lg={6} xl={6} xxl={6}> */}
      {/* <div className="col-4"></div> */}
      <Column>
        <div
          className="col-4-lg col-8-sm
       ndc-form-wrapper p-4"
        >
          <Row id="customer-form-header-row">
            {/* Modal------------------------ */}
            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Customer {custID} Created</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {firstName} {lastName} has been successfully created!
              </Modal.Body>
            </Modal>
            {/* End Modal ------------------- */}
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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="pt-2" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  className=""
                  value={firstName}
                  type="text"
                  placeholder="Enter first name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a first name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="pt-2" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  className=""
                  value={lastName}
                  type="text"
                  placeholder="Enter last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a last name.
                </Form.Control.Feedback>
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
                    if (DEBUG_MODE) {
                      console.log("Formatted Phone: ", formattedPhone);
                    }
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
            <>
              <Toast
                show={showToast}
                onClose={handleCloseToast}
                delay={3000}
                autohide
              >
                <Toast.Header>
                  <strong className="me-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body className="bg-success text-white">
                  {toastMessage}
                </Toast.Body>
              </Toast>
            </>
          </div>
          {/* </Stack> */}
        </div>
      </Column>
    </Row>
  );
};

export default CustomerForm;
