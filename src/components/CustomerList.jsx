import React, { useState, useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "../FormStyles.css";
// import "./CustomerList.css";
// import Customer from "./customer";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Column from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";

const CustomerList = () => {
  const [options, setOptions] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [customerIsSelected, setCustomerIsSelected] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  const DEBUG_MODE = true;

  const CUSTOMER_API_URL = "http://localhost:5000/api/customers";
  console.log("Customer API URL:", CUSTOMER_API_URL);

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
  //   customer: {
  //     firstName,
  //     lastName,
  //     email,
  //     phone,
  //     streetAddress,
  //     unitNumber,
  //     city,
  //     state,
  //     zipCode,
  //     custID: generatedID,
  //   },
  //   repairTickets: [],
  // };

  useEffect(() => {
    axios
      .get(CUSTOMER_API_URL)
      .then((response) => {
        setOptions(response.data);
        console.log("Fetched customers:", response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching customers");
        setLoading(false);
      });
  }, []);

  const handleSelect = (customerId) => {
    console.log("Selected customer ID:", customerId);
    const customer = options.find((cust) => cust._id === customerId);
    setIsVisible(true);
    setSelectedCustomer(customer);
    setCustomerIsSelected(true);
    if (DEBUG_MODE) {
      console.log("Selected customer:", customer?.customer?.custID);
    }
  };

  return (
    <Row id className="customer-form-row-wrapper">
      {/* <Column xs={10} sm={10} md={8} lg={6} xl={6} xxl={6}> */}
      {/* <div className="col-4"></div> */}
      <Column>
        <div
          className="col-4-lg col-8-sm
       ndc-form-wrapper p-4"
        >
          <Row id="customer-form-header-row">
            {/* Modal------------------------ */}

            {/* End Modal ------------------- */}
            <div className="col-6">
              <h2>Customer</h2>
            </div>
            <div className="col-6">
              <h3 className={isVisible ? "visible" : "invisible"}>
                <span className="badge text-bg-secondary">
                  ID: {selectedCustomer?.customer?.custID}
                </span>
              </h3>
            </div>
          </Row>
          {/* <Stack> */}
          <div className="row"></div>

          <DropdownButton
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

          {/* </Stack> */}
        </div>
      </Column>
    </Row>
  );
};

export default CustomerList;
