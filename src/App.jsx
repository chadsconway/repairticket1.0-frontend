import { useState, useEffect } from "react";
import * as BS from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactIcons from "./components/react-icons.jsx";
import CustomerForm from "./components/CustomerForm.jsx";
import RepairTicketForm from "./components/RepairTicketForm.jsx";
import RepairTicketUpdateForm from "./components/RepairTicketUpdateForm.jsx";
import "./components/RepairTicketUpdateForm.css";
import LaborForm from "./components/LaborForm.jsx";
const App = () => {
  const [theme, setTheme] = useState("light");

  // Apply theme to body element
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <BS.Container className="py-4">
      <BS.Row className="mb-4">
        <BS.Col className="d-flex justify-content-between align-items-center">
          <h1>TLHW Repair Shop</h1>
          <BS.Button
            variant={theme === "light" ? "dark" : "light"}
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </BS.Button>
        </BS.Col>
      </BS.Row>

      <CustomerForm
        onSubmit={(data) => console.log("Customer submitted:", data)}
      />
      <RepairTicketForm
        onSubmit={(data) => console.log("Repair ticket submitted:", data)}
      />

      <RepairTicketUpdateForm
        onSubmit={(data) => console.log("Update submitted:", data)}
        onPartsEntry={(data) => console.log("Entering parts:", data)}
        onEstimateGenerate={(data) => console.log("Generating estimate:", data)}
        onFinalTicket={(data) => console.log("Creating final ticket:", data)}
        onDoneUpdate={(data) => console.log("Done updating ticket:", data)}
      />
    </BS.Container>
  );
};

export default App;
