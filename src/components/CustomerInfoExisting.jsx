import { useState, useEffect } from "react";
// React Bootstrap Components
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
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

const CUSTOMER_API_URL = "http://192.168.0.187:5000/api/customers";

const DEBUG_MODE = true;

const CustomerInfoExisting = ({ showExistingCustomer, ID }) => {
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
  const [selectedCustomer, setSelectedCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    unitNumber: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [validated, setValidated] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
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

  const toggleReadOnly = () => {
    setIsReadOnly(!isReadOnly); // Toggle the state
    console.log("isReadOnly:", isReadOnly);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (DEBUG_MODE) {
      console.log(`handleChange - name: ${name}, value: ${value}`);
    }
    setSelectedCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (ID) {
      // Fetch customer data based on ID
      axios
        .get(`${CUSTOMER_API_URL}/${ID}`)
        .then((response) => {
          console.log(`response.data: ${JSON.stringify(response.data)}`);
          setFirstName(response.data.customer.firstName || "");
          setLastName(response.data.customer.lastName || "");
          setEmail(response.data.customer.email || "");
          setPhone(response.data.customer.phone || "");
          setStreetAddress(response.data.customer.streetAddress || "");
          setUnitNumber(response.data.customer.unitNumber || "");
          setCity(response.data.customer.city || "");
          setState(response.data.customer.state || "");
          setZipCode(response.data.customer.zipCode || "");
          setCustID(response.data.customer.custID || "");
          setSelectedCustomer(response.data.customer);
          if (DEBUG_MODE) {
            console.log("CustID: ", firstName);
          }
          // setSelectedCustomer((prevData) =>

          // ((prevData) => ({
          //   ...prevData,
          //   customer: {
          //     ...prevData.customer,
          //     firstName: response?.data?.customer?.firstName,
          //     lastName: response?.data?.customer?.lastName,
          //     email: response?.data?.customer?.email,
          //     phone: response?.data?.customer?.phone,
          //     streetAddress: response?.data?.customer?.streetAddress,
          //     unitNumber: response?.data?.customer?.unitNumber,
          //     city: response?.data?.customer?.city,
          //     state: response?.data?.customer?.state,
          //     zipCode: response?.data?.customer?.zipCode,
          //   },
          //   _id: response.data._id,
          //   repairTickets: response.data.repairTickets,
          // }));
          if (DEBUG_MODE) {
            console.log(
              "selectedCustomer?.customer?.firstName: ",
              selectedCustomer?.firstName
            );
            console.log("firstName: ", { firstName });
          }
        })
        .catch((error) => {
          console.error("Error fetching customer data:", error);
        });
    }
  }, [ID]);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (DEBUG_MODE) {
      console.log("Submitting form with data:", form);
    }
    setValidated(true);
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    // Further submission logic can be added here
    const customerData = {
      _id: ID,
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
        custID,
      },
      repairTickets: [],
    };
    if (DEBUG_MODE) {
      console.log("Customer Data Submitted: ", customerData);
    }
    axios
      .put(`${CUSTOMER_API_URL}/${ID}`, customerData)
      .then((response) => {
        if (DEBUG_MODE) {
          console.log("Customer updated successfully:", response.data);
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

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{ display: showExistingCustomer ? "block" : "none" }}
      className="m-4 ndc-yellow p-4 rounded-5"
    >
      <Row>
        <div className="col-md-3">
          <h2>Customer</h2>
        </div>
        <div className="col-md-9">
          <h3 className="position-relative float-end">
            <span className="badge text-bg-secondary">ID: {custID}</span>
          </h3>
        </div>

        <Form.Group as={Column} md="6" className="pt-2" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <FormControl
            readOnly={isReadOnly}
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
        <Form.Group as={Column} md="6" className="pt-2" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <FormControl
            readOnly={isReadOnly}
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
        <Form.Group as={Column} md="6" className="pt-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <FormControl
            readOnly={isReadOnly}
            className=""
            value={email}
            type="email"
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Column} md="6" className="pt-2" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <FormControl
            readOnly={isReadOnly}
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
        <Form.Group
          as={Column}
          md="6"
          className="pt-2"
          controlId="streetAddress"
        >
          <Form.Label>Address</Form.Label>
          <FormControl
            readOnly={isReadOnly}
            className=""
            value={streetAddress}
            type="text"
            placeholder="Enter street address"
            onChange={(e) => setStreetAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Column} md="6" className="pt-2" controlId="unitNumber">
          <Form.Label>Unit #</Form.Label>
          <FormControl
            readOnly={isReadOnly}
            className=""
            value={unitNumber}
            type="text"
            placeholder="Enter unit number"
            onChange={(e) => setUnitNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Column} md="4" className="pt-2" controlId="city">
          <Form.Label>City</Form.Label>
          <FormControl
            readOnly={isReadOnly}
            aria-label="City"
            placeholder="City"
            value={city}
            type="text"
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Column} md="4" className="pt-2" controlId="state">
          <Form.Label>State</Form.Label>
          <FormControl
            readOnly={isReadOnly}
            aria-label="State"
            placeholder="State"
            value={state}
            type="text"
            onChange={(e) => setState(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Column} md="4" className="pt-2" controlId="zipCode">
          <Form.Label>Zip Code</Form.Label>
          <FormControl
            readOnly
            aria-label="Zip Code"
            placeholder="Zip Code"
            value={zipCode}
            type="text"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </Form.Group>
        <Button
          className="mt-3 mx-auto col-md-4 col-sm-6"
          variant="primary"
          onClick={toggleReadOnly}
        >
          {isReadOnly ? "Edit Customer Info" : "Lock Customer Info"}
        </Button>
        <Button
          className="mt-3 mx-auto col-md-4 col-sm-6"
          variant="primary"
          type="submit"
        >
          Save Updates
        </Button>
      </Row>
      <Modal show={showModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Customer: {firstName} {lastName} updated!
        </Modal.Body>
      </Modal>
    </Form>
  );
};

export default CustomerInfoExisting;
