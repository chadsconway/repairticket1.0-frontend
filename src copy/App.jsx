import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomerForm from "./components/CustomerForm.jsx";
import "./FormStyles.css";
import RepairTicketForm from "./components/RepairTicketForm.jsx";
import RepairTicketUpdateForm from "./components/RepairTicketUpdateForm.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/CustomerForm.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomerForm />
      {/* <RepairTicketForm />
      <RepairTicketUpdateForm /> */}
    </>
  );
}

export default App;
