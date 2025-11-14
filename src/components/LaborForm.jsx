import React, { useState } from "react";
import * as BS from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import "./RepairTicketUpdateForm.css";

const LaborForm = ({ laborDescription, laborTime, laborSubtotal }) => {
  const [form, setFormData] = useState({
    laborDescription: laborDescription || "",
    laborTime: laborTime || 0,
    laborSubtotal: laborSubtotal || 0,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // Handle form submission if needed
  };

  const handleClearForm = () => {
    setFormData({
      laborDescription: "",
      laborTime: 0,
      laborSubtotal: 0,
    });
  };

  return (
    <BS.Card className="mb-4 customer-form">
      <BS.Card.Body>
        <BS.Form onSubmit={handleSubmit}>
          <div className="labor-container">
            <div className="mb-3">
              <h3 className="parts-fields-title mb-0">Labor</h3>
            </div>
            <div className="labor-fields-container">
              <BS.Form.Group
                controlId="labor_description"
                className="labor-description-field"
              >
                <BS.Form.Label>Description</BS.Form.Label>
                <BS.Form.Control />
                {/* <textarea
                  name="labor_description"
                  value={form.labor_description}
                  onChange={handleChange}
                  placeholder="Describe the labor required"
                ></textarea> */}
              </BS.Form.Group>
              <BS.Form.Group
                controlId="labor_description"
                className="labor-description-field"
              >
                {/* <BS.Form.Control
                  type="textarea"
                  name="labor_description"
                  value={form.labor_description}
                  onChange={handleChange}
                  placeholder="Describe the labor required"
                /> */}
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
              <BS.Form.Group
                controlId="labor-total-field"
                className="labor-total"
              >
                <BS.Form.Label>Subtotal</BS.Form.Label>
                <BS.Form.Control
                  type="number"
                  min="0"
                  name="labor_total"
                  value={form.labor_subtotal}
                  onChange={handleChange}
                  placeholder="Total"
                />
              </BS.Form.Group>

              <BS.Row className="mt-3">
                <BS.Col md={12}>
                  <div className="d-flex gap-2 w-100">
                    <BS.Button
                      variant="primary"
                      className="labor-add-btn flex-grow-1"
                      onClick={handleSubmit}
                    >
                      <BsPlusLg className="me-2" />
                      Add Labor
                    </BS.Button>
                    <BS.Button
                      variant="danger"
                      className="labor-clear-btn flex-grow-1"
                      onClick={handleClearForm}
                    >
                      Clear Form
                    </BS.Button>
                  </div>
                </BS.Col>
              </BS.Row>
            </div>
          </div>
        </BS.Form>
      </BS.Card.Body>
    </BS.Card>
  );
};

export default LaborForm;
