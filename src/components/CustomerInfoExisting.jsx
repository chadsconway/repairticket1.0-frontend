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

  useEffect(() => {
    if (ID) {
      // Fetch customer data based on ID
      axios
        .get(`${CUSTOMER_API_URL}/${ID}`)
        .then((response) => {
          if (DEBUG_MODE) {
            console.log(
              "CustomerInfoExisting - fetched data: response.data.customer: ",
              response.data.customer
            );
            console.log(
              "CustomerInfoExisting - response.data.customer.firstName: ",
              response.data.customer.firstName
            );
          }
          if (DEBUG_MODE) {
            console.log("selectedCustomer:", selectedCustomer);
            console.log;
          }
          const setupChange = (e) => {
            const { name, value } = e.target;
            setSelectedCustomer((prev) => ({
              ...prev,
              [name]: value,
            }));
          };

          setupChange({
            target: {
              name: "firstName",
              value: response?.data?.customer?.firstName,
            },
          });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className={showExistingCustomer ? "visible" : "hidden"}>
        Existing Customer Form
      </div>
    </>
  );
};

export default CustomerInfoExisting;
