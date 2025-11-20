import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomerForm from "./components/CustomerForm.jsx";
import CustomerList from "./components/CustomerList.jsx";
import CustomerInfoExisting from "./components/CustomerInfoExisting.jsx";
import BootstrapCustomerForm from "./components/BootstrapCustomerForm.jsx";
import "./FormStyles.css";
import RepairTicketForm from "./components/RepairTicketForm.jsx";
import RepairTicketUpdateForm from "./components/RepairTicketUpdateForm.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/CustomerForm.css";

function App() {
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [showExistingCustomer, setShowExistingCustomer] = useState(true);
  const [ID, setID] = useState(null);

  const handleShowCustomerForm = () => {
    if (!showCustomerForm) {
      setShowCustomerForm(true);
    } else {
      setShowCustomerForm(false);
    }
  };

  const handleShowExistingCustomer = (ID) => {
    console.log("Customer ID from App.jsx:", ID);
    setID(ID);
    setShowExistingCustomer(true);
  };
  return (
    <>
      <CustomerList
        addCustomerFormVisible={handleShowCustomerForm}
        showExistingCustomer={handleShowExistingCustomer}
      />
      <CustomerForm showForm={showCustomerForm} />
      <CustomerInfoExisting
        showExistingCustomer={showExistingCustomer}
        ID={ID}
      />
      {/* <BootstrapCustomerForm /> */}
      {/* <RepairTicketForm />
      <RepairTicketUpdateForm /> */}
    </>
  );
}

export default App;
