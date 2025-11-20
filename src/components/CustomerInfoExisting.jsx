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

  useEffect(() => {
    if (ID) {
      // Fetch customer data based on ID
      axios
        .get(`${CUSTOMER_API_URL}/${ID}`)
        .then((response) => {
          if (DEBUG_MODE) {
            console.log("Fetched customer data:", response.data);
          }
          const existingCust = response.data;
          setFirstName(existingCust.firstName || "");
          setLastName(existingCust.lastName || "");
          setEmail(existingCust.email || "");
          setPhone(existingCust.phone || "");
          setStreetAddress(existingCust.streetAddress || "");
          setUnitNumber(existingCust.unitNumber || "");
          setCity(existingCust.city || "");
          setState(existingCust.state || "");
          setZipCode(existingCust.zipCode || "");
          setCustID(existingCust._id || "");
        })
        .catch((error) => {
          console.error("Error fetching customer data:", error);
        });
    }
  }, [ID]);

  return (
    <div className={showExistingCustomer ? "visible" : "hidden"}>
      Existing Customer Form
    </div>
  );
};

export default CustomerInfoExisting;
