import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMemo } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../FormStyles.css";
// import "./CustomerList.css";
// import Customer from "./customer";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Column from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";
import { Button } from "react-bootstrap";

const CustomerList = ({ addCustomerFormVisible, showExistingCustomer }) => {
  const [options, setOptions] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isExistingCustomerVisible, setIsExistingCustomerVisible] =
    useState(false);
  const [monitorNewCustomerForm, setMonitorNewCustomerForm] =
    useState("hidden");
  const [customerIsSelected, setCustomerIsSelected] = useState(false);
  const [addCustomerButtonText, setAddCustomerButtonText] =
    useState("Add New Customer");
  // const [CustomerList, setCustomerList] = useState([]);

  const handleShowCustomerForm = () => {
    if (monitorNewCustomerForm === "hidden") {
      setMonitorNewCustomerForm("visible");
      setIsExistingCustomerVisible(false);
      setAddCustomerButtonText("Close Customer Form");
      addCustomerFormVisible(true);
    } else {
      setMonitorNewCustomerForm("hidden");
      setAddCustomerButtonText("Add New Customer");
      addCustomerFormVisible(false);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  const DEBUG_MODE = true;

  const CUSTOMER_API_URL = "http://localhost:5000/api/customers";
  console.log("Customer API URL:", CUSTOMER_API_URL);

  //******************Customer Data Handling Functions - START********* */
  //*********************************************************************** */

  //@Description: Fetch customer data from API on component mount
  useEffect(() => {
    axios
      .get(CUSTOMER_API_URL)
      .then((response) => {
        console.log("API Response Data:", response.data);

        setOptions(response.data);
        console.log("Fetched customers:", CustomerList);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching customers");
        setLoading(false);
      });
  }, []);

  //@useState: CustomerFields
  //@Description:  Multi-field state to hold customer portion of Customer
  function CustomerFields() {
    const [CustomerFields, setCustomerFields] = useState([
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
    ]);
  }

  //@useState: Customer
  //@Description: State of full customer object
  function Customer() {
    const [Customer, setCustomer] = useState({
      _id,
      customer: CustomerFields,
      repairTickets: [],
    });
  }

  //@useState: CustomerList
  //@Description: State to hold list of customers fetched from API
  //@function: Create CustomerList state
  function CustomerList() {
    const [CustomerList, setCustomerList] = useState([]);
  }

  //@useState: Add Customer to CustomerList
  //@Description: Function to add new customer to CustomerList state
  //@function: Add customer to CustomerList state
  function addCustomerToList(newCustomer) {
    setCustomerList((prevList) => [...prevList, newCustomer]);
  }

  //@useState: Removing Customer from CustomerList
  //@Description: Function to remove customer from CustomerList state
  //@function: Remove customer from CustomerList state
  function removeCustomerFromList(customerId) {
    setCustomerList((prevList) =>
      prevList.filter((customer) => customer._id !== customerId)
    );
  }

  //@useState: Updating Customer in CustomerList
  //@Description: Function to update customer in CustomerList state
  //@function: Update customer in CustomerList state
  function updateCustomerInList(updatedCustomer) {
    setCustomerList((prevList) =>
      prevList.map((customer) =>
        customer._id === updatedCustomer._id ? updatedCustomer : customer
      )
    );
  }

  //@useState: Sorting CustomerList by last name
  //@Description: Function to sort CustomerList by last name
  //@function: Sort CustomerList by last name
  function sortCustomerListByLastName() {
    setCustomerList((prevList) =>
      [...prevList].sort((a, b) =>
        a.customer.lastName.localeCompare(b.customer.lastName)
      )
    );
  }

  //@Description: Sort customers by last name
  // const sortCustomers = useMemo(
  //   () =>
  //     CustomerList.sort(
  //       (
  //         { customer: { lastName: lastNameA = "" } },
  //         { customer: { lastName: lastNameB = "" } }
  //       ) => lastNameA.localeCompare(lastNameB)
  //     ),
  //   [CustomerList]
  // );

  //@Description: Handle customer selection from dropdown
  const handleSelect = (customerId) => {
    console.log("Selected customer ID:", customerId);
    const customer = options.find((cust) => cust._id === customerId);
    showExistingCustomer(customerId);
    setIsExistingCustomerVisible(true);
    setSelectedCustomer(customer);
    setCustomerIsSelected(true);
    if (DEBUG_MODE) {
      console.log("Selected customer:", customer?.customer?.custID);
    }
  };

  //***********************Customer Data Handling Functions - END********* */
  //*********************************************************************** */
  // const useCustomerData = (selectedCustomer) -> {
  //   constructor(customer) {
  //     firstName,
  //     lastName,
  //     email,
  //     phone,
  //     streetAddress,
  //     unitNumber,
  //     city,
  //     state,
  //     zipCode,
  //   } = customer;
  // }

  // const customerData = {

  // };

  // const sortCustomers = (unsortedCustomers) => {
  //   console.log("Sorting customers:", unsortedCustomers);
  //   console.log("lastName ", unsortedCustomers[0].customer.lastName);

  //   const sortedCustomers = [...unsortedCustomers].sort((a, b) => {
  //     a.customer.lastName.localeCompare(b.customer.lastName);
  //     console.log("Comparing:", a.customer.lastName, b.customer.lastName);
  //   });
  //   return sortedCustomers;
  // };

  return (
    <div as={Form} className="m-4 p-4 ndc-yellow rounded-5">
      <Row>
        <div className="col-md-6">
          <h2>Customer</h2>
        </div>
        <div className="col-md-6">
          {/* <h3 className={isExistingCustomerVisible ? "visible" : "invisible"}>
            <span className="badge text-bg-secondary">
              ID: {selectedCustomer?.customer?.custID}
            </span>
          </h3> */}
        </div>

        <Button
          variant="secondary"
          className="ms-2 mb-2 col-sm-6 col-md-4 col-lg-3"
          onClick={() => handleShowCustomerForm()}
        >
          {addCustomerButtonText}
        </Button>
        <DropdownButton
          className="ms-2 mb-2 col-sm-6 col-md-4 col-lg-3"
          variant="primary"
          id="dropdown-basic-button"
          title={"Select Customer"}
        >
          {options.map((customer) => (
            <Dropdown.Item
              variant="bg-secondary-text"
              key={customer._id}
              onClick={() => handleSelect(customer._id)}
            >
              {customer.customer.lastName}, {customer.customer.firstName}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Row>
    </div>
  );
};

export default CustomerList;
