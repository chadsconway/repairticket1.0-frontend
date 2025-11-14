import React, { useState } from "react";
import * as BS from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import AddPartForm from "./PartForm.jsx";

import LaborForm from "./LaborForm.jsx";
import LaborList from "./LaborList.jsx";
import "./CustomerForm.css"; // reuse the form styles for consistency
import "./RepairTicketUpdateForm.css";
import ErrorBoundary from "./ErrorBoundary.jsx";
// ndc styles to override AI and bootstrap

/**
 * UpdateRepairTicketForm
 * A form for updating repair ticket details and managing repair workflow
 * Props:
 *  - onSubmit (optional) receives the form data when submitted
 *  - onPartsEntry (optional) callback when enter_parts button clicked
 *  - onEstimateGenerate (optional) callback when generate_estimate clicked
 *  - onFinalTicket (optional) callback when create_final_ticket clicked
 *  - onDoneUpdate (optional) callback when done_updating clicked
 */
const UpdateRepairTicketForm = ({
  onSubmit,
  onPartsEntry,
  onEstimateGenerate,
  onFinalTicket,
  onDoneUpdate,
}) => {
  const [form, setForm] = useState({
    repair_ticket_id: "",
    product_description: "",
    brand: "",
    model: "",
    serial_number: "",
    issue_description: "",
    status: "received",
    technician_notes: "",

    part_description: "",
    part_number: "",
    vendor: "",
    price: "",
    retail_price: "",
  });
  const [laborLineItems, setLaborLineItems] = useState([]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePartInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPart = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!form.repair_ticket_id.toString().trim()) {
      err.repair_ticket_id = "Repair Ticket ID is required";
    }
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    if (typeof onSubmit === "function") {
      onSubmit(form);
    } else {
      // eslint-disable-next-line no-console
      console.log("UpdateRepairTicketForm submit:", form);
    }
  };

  // Clear only the part-related fields
  const clearPartFields = () => {
    setForm((prev) => ({
      ...prev,
      part_description: "",
      part_number: "",
      vendor: "",
      price: "",
      retail_price: "",
    }));
  };

  return (
    <BS.Card className="mb-4 customer-form">
      <BS.Card.Body>
        <h2 className="mb-3">Update Repair Ticket</h2>

        <BS.Row>
          <BS.Col md={12} className="mb-3">
            <BS.Form.Group controlId="technician_notes">
              <BS.Form.Label>Technician Notes</BS.Form.Label>
              <BS.Form.Control
                as="textarea"
                rows={4}
                name="technician_notes"
                value={form.technician_notes}
                onChange={handleChange}
                placeholder="Enter technician notes and observations"
              />
            </BS.Form.Group>
          </BS.Col>
        </BS.Row>
        <AddPartForm
          partDescription={form.part_description}
          partNumber={form.part_number}
          vendor={form.vendor}
          price={form.price}
          retailPrice={form.retail_price}
          onInputChange={handlePartInputChange}
          onAddPart={(e) => {
            handleAddPart(e);
            clearPartFields();
            onPartsEntry?.(form);
          }}
        />
        <LaborForm
          laborDescription={form.laborDescription}
          laborTime={form.laborTime}
          laborSubtotal={form.laborSubtotal}
        />
        <LaborList laborLineItems={laborLineItems} />

        <div className="d-flex flex-wrap gap-2 justify-content-between">
          <div className="d-flex gap-2">
            <BS.Button
              type="button"
              variant="info"
              onClick={() => onEstimateGenerate?.(form)}
            >
              Generate Estimate
            </BS.Button>
          </div>
          <div className="d-flex gap-2">
            <BS.Button
              type="button"
              variant="success"
              onClick={() => onFinalTicket?.(form)}
            >
              Create Final Ticket
            </BS.Button>
            <BS.Button
              type="button"
              variant="secondary"
              onClick={() => onDoneUpdate?.(form)}
            >
              Done Updating
            </BS.Button>
          </div>
        </div>
      </BS.Card.Body>
    </BS.Card>
  );
};

export default UpdateRepairTicketForm;
