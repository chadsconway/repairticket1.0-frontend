import React, { useState } from "react";
import * as BS from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import AddPartForm from "./AddPartForm.jsx";
import "./CustomerForm.css"; // reuse the form styles for consistency
import "./UpdateRepairTicketForm.css"; // ndc styles to override AI and bootstrap

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
    labor_description: "",
    labor_time: 0,
    part_description: "",
    part_number: "",
    vendor: "",
    price: "",
    retail_price: "",
  });

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
        <BS.Form onSubmit={handleSubmit}>
          <BS.Row>
            <BS.Col md={6} className="mb-3">
              <BS.Form.Group controlId="repair_ticket_id">
                <BS.Form.Label>Repair Ticket ID</BS.Form.Label>
                <BS.Form.Control
                  name="repair_ticket_id"
                  value={form.repair_ticket_id}
                  onChange={handleChange}
                  isInvalid={!!errors.repair_ticket_id}
                  placeholder="Enter ticket ID"
                />
                <BS.Form.Control.Feedback type="invalid">
                  {errors.repair_ticket_id}
                </BS.Form.Control.Feedback>
              </BS.Form.Group>
            </BS.Col>

            <BS.Col md={6} className="mb-3">
              <BS.Form.Group controlId="status">
                <BS.Form.Label>Status</BS.Form.Label>
                <BS.Form.Select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="received">Received</option>
                  <option value="inspected">Inspected</option>
                  <option value="estimate_approved">Estimate Approved</option>
                  <option value="parts_received">Parts Received</option>
                  <option value="complete">Complete</option>
                  <option value="further_repairs_needed">
                    Further Repairs Needed
                  </option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>

            <BS.Col md={12} className="mb-3">
              <BS.Form.Group controlId="product_description">
                <BS.Form.Label>Product Description</BS.Form.Label>
                <BS.Form.Control
                  name="product_description"
                  value={form.product_description}
                  onChange={handleChange}
                  placeholder="Brief description of the product"
                />
              </BS.Form.Group>
            </BS.Col>

            <BS.Col md={6} className="mb-3">
              <BS.Form.Group controlId="brand">
                <BS.Form.Label>Brand</BS.Form.Label>
                <BS.Form.Control
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  placeholder="Brand"
                />
              </BS.Form.Group>
            </BS.Col>

            <BS.Col md={6} className="mb-3">
              <BS.Form.Group controlId="model">
                <BS.Form.Label>Model</BS.Form.Label>
                <BS.Form.Control
                  name="model"
                  value={form.model}
                  onChange={handleChange}
                  placeholder="Model"
                />
              </BS.Form.Group>
            </BS.Col>

            <BS.Col md={6} className="mb-3">
              <BS.Form.Group controlId="serial_number">
                <BS.Form.Label>Serial Number</BS.Form.Label>
                <BS.Form.Control
                  name="serial_number"
                  value={form.serial_number}
                  onChange={handleChange}
                  placeholder="Serial Number"
                />
              </BS.Form.Group>
            </BS.Col>
          </BS.Row>
          <BS.Col md={12} className="mb-3">
            <BS.Form.Group controlId="issue_description">
              <BS.Form.Label>Issue Description</BS.Form.Label>
              <BS.Form.Control
                as="textarea"
                rows={3}
                name="issue_description"
                value={form.issue_description}
                onChange={handleChange}
                placeholder="Describe the issue in detail"
              />
            </BS.Form.Group>
          </BS.Col>

          <div className="labor-container">
            <div className="mb-3">
              <h3 className="parts-fields-title mb-0">Labor</h3>
            </div>
            <div className="labor-fields-container">
              <BS.Button
                variant="primary"
                className="labor-add-btn"
                onClick={() => console.log("Add labor line")}
              >
                <BsPlusLg />
              </BS.Button>

              <BS.Form.Group
                controlId="labor_description"
                className="labor-description-field"
              >
                <BS.Form.Label>Labor Description</BS.Form.Label>
                <BS.Form.Control
                  name="labor_description"
                  value={form.labor_description}
                  onChange={handleChange}
                  placeholder="Describe the labor required"
                />
              </BS.Form.Group>

              <BS.Form.Group
                controlId="labor_time"
                className="labor-time-field"
              >
                <BS.Form.Label>Time</BS.Form.Label>
                <BS.Form.Control
                  type="number"
                  min="0"
                  step="0.1"
                  name="labor_time"
                  value={form.labor_time}
                  onChange={handleChange}
                  placeholder="Hours"
                />
              </BS.Form.Group>
            </div>
          </div>
          {/* Problems with modularizing and pulling out AddPartForm to separate component */}
          {/* <AddPartForm
            part_description={part_description}
            part_number={part_number}
            vendor={vendor}
            price={price}
            retail_price={retail_price}
            handlePartInputChange={handlePartInputChange}
            handleAddPart={handleAddPart}
            clearPartFields={clearPartFields}
          /> */}
          <div className="parts-container mb-4">
            <div className="mb-3">
              <h3 className="parts-fields-title mb-0">Parts</h3>
            </div>

            <div className="parts-fields-container-single mb-3">
              <BS.Form.Group controlId="part_description">
                <BS.Form.Label>Description</BS.Form.Label>
                <BS.Form.Control
                  type="text"
                  name="part_description"
                  value={form.part_description}
                  onChange={handlePartInputChange}
                  placeholder="Enter part description"
                />
              </BS.Form.Group>
            </div>
            <div className="parts-fields-container mb-3">
              <BS.Form.Group controlId="part_number">
                <BS.Form.Label>Part #</BS.Form.Label>
                <BS.Form.Control
                  type="text"
                  name="part_number"
                  value={form.part_number}
                  onChange={handlePartInputChange}
                  placeholder="Part number"
                />
              </BS.Form.Group>

              <BS.Form.Group controlId="vendor">
                <BS.Form.Label>Vendor</BS.Form.Label>
                <BS.Form.Control
                  type="text"
                  name="vendor"
                  value={form.vendor}
                  onChange={handlePartInputChange}
                  placeholder="Vendor"
                />
              </BS.Form.Group>
            </div>

            <div className="parts-fields-container mb-3">
              <BS.Form.Group controlId="price">
                <BS.Form.Label>Price</BS.Form.Label>
                <BS.Form.Control
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handlePartInputChange}
                  placeholder="Price"
                  min="0"
                  step="0.01"
                />
              </BS.Form.Group>

              <BS.Form.Group controlId="retail_price">
                <BS.Form.Label>Retail Price</BS.Form.Label>
                <BS.Form.Control
                  type="number"
                  name="retail_price"
                  value={form.retail_price}
                  onChange={handlePartInputChange}
                  placeholder="Retail price"
                  min="0"
                  step="0.01"
                />
              </BS.Form.Group>
            </div>

            <div className="d-flex gap-2 mb-3">
              <BS.Button
                type="button"
                variant="primary"
                onClick={handleAddPart}
              >
                Add Part
              </BS.Button>
              <BS.Button
                type="button"
                variant="danger"
                onClick={clearPartFields}
              >
                Clear Part Fields
              </BS.Button>
            </div>
          </div>
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
        </BS.Form>
      </BS.Card.Body>
    </BS.Card>
  );
};

export default UpdateRepairTicketForm;
