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

const CustomerList = () => {
  const [options, setOptions] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const CUSTOMER_API_URL = "http://localhost:5000/api/customers";
  console.log("Customer API URL:", CUSTOMER_API_URL);

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
    const customer = options.find((cust) => cust.id === customerId);
    setSelectedCustomer(customer);
    if (DEBUG_MODE) {
      console.log("Selected customer:", customer);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <DropdownButton
            variant="primary"
            id="dropdown-basic-button"
            title={selectedCustomer ? selectedCustomer.name : "Select Customer"}
          >
            {options.map((customer) => (
              <Dropdown.Item
                variant="bg-secondary-text"
                key={customer._id}
                onClick={() => handleSelect(customer.id)}
              >
                {customer.customer.lastName}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerList;
