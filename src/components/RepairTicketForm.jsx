import React, { useState } from "react";
import * as BS from "react-bootstrap";
import "./CustomerForm.css"; // reuse the CustomerForm styles so both forms match

/**
 * RepairTicketForm
 * Fields: customer_id, product_description, brand, model, serial_number, issue_description, status, date_created
 * Props:
 *  - onSubmit (optional) receives the form object when submitted
 */
const RepairTicketForm = ({ onSubmit }) => {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  const [form, setForm] = useState({
    customer_id: "",
    product_description: "",
    brand: "",
    model: "",
    serial_number: "",
    issue_description: "",
    date_created: today,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!form.customer_id.toString().trim())
      err.customer_id = "Customer ID is required";
    if (!form.product_description.trim())
      err.product_description = "Product description is required";
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
      console.log("RepairTicketForm submit:", form);
    }
  };

  return (
    <BS.Card className="mb-4 customer-form">
      <BS.Card.Body>
        <h2 className="mb-3">Create Repair Ticket</h2>
        <BS.Form onSubmit={handleSubmit}>
          <BS.Row>
            <BS.Col md={12} className="mb-3">
              <BS.Form.Group controlId="customer_id">
                <BS.Form.Label>Customer ID</BS.Form.Label>
                <BS.Form.Control
                  name="customer_id"
                  value={form.customer_id}
                  onChange={handleChange}
                  isInvalid={!!errors.customer_id}
                  placeholder="Customer ID"
                />
                <BS.Form.Control.Feedback type="invalid">
                  {errors.customer_id}
                </BS.Form.Control.Feedback>
              </BS.Form.Group>
            </BS.Col>

            <BS.Col md={12} className="mb-3">
              <BS.Form.Group controlId="product_description">
                <BS.Form.Label>Product Description</BS.Form.Label>
                <BS.Form.Control
                  name="product_description"
                  value={form.product_description}
                  onChange={handleChange}
                  isInvalid={!!errors.product_description}
                  placeholder="Brief description of the product"
                />
                <BS.Form.Control.Feedback type="invalid">
                  {errors.product_description}
                </BS.Form.Control.Feedback>
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

            <BS.Col md={12} className="mb-3">
              <BS.Form.Group controlId="issue_description">
                <BS.Form.Label>Issue Description</BS.Form.Label>
                <BS.Form.Control
                  as="textarea"
                  rows={4}
                  name="issue_description"
                  value={form.issue_description}
                  onChange={handleChange}
                  placeholder="Describe the issue in detail"
                />
              </BS.Form.Group>
            </BS.Col>

            <BS.Col md={6} className="mb-3">
              <BS.Form.Group controlId="date_created">
                <BS.Form.Label>Date Created</BS.Form.Label>
                <BS.Form.Control
                  type="date"
                  name="date_created"
                  value={form.date_created}
                  onChange={handleChange}
                />
              </BS.Form.Group>
            </BS.Col>
          </BS.Row>

          <div className="d-flex gap-2">
            <BS.Button type="submit" variant="primary">
              Create Ticket
            </BS.Button>
            <BS.Button
              type="button"
              variant="secondary"
              onClick={() =>
                setForm({
                  customer_id: "",
                  product_description: "",
                  brand: "",
                  model: "",
                  serial_number: "",
                  issue_description: "",
                  date_created: today,
                })
              }
            >
              Reset
            </BS.Button>
          </div>
        </BS.Form>
      </BS.Card.Body>
    </BS.Card>
  );
};

export default RepairTicketForm;
