import { useState, useEffect } from "react";
import * as BS from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactIcons from "./components/react-icons.jsx";
import CustomerForm from "./components/CustomerForm.jsx";
import RepairTicketForm from "./components/RepairTicketForm.jsx";
import RepairTicketUpdateForm from "./components/RepairTicketUpdateForm.jsx";
import TextInput from "./components/inputs/TextInput.jsx";
import TextAreaInput from "./components/inputs/TextAreaInput.jsx";
import IDGenerator from "./components/inputs/IDGenerator.jsx";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
const App = () => {
  return (
    <>
      <CustomerForm />
      <br />
      {/* <RepairTicketForm /> */}
    </>
  );
};

export default App;
