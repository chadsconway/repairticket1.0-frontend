import React, { useState } from "react";
import * as BS from "react-bootstrap";
import "./CustomerForm.css";

/**
 * CustomerForm
 * Fields: name, phone, email, address, date_created
 * Props:
 *  - onSubmit (optional) receives the form object when submitted
 */
const CustomerForm = ({ onSubmit }) => {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    date_created: today,
  });

  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim()) err.email = "Email is required";
    // basic email pattern
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      err.email = "Enter a valid email";
    if (!form.phone.trim()) err.phone = "Phone is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    // call optional callback or log to console
    if (typeof onSubmit === "function") {
      onSubmit(form);
    } else {
      // fallback: log the collected data
      // In a real app you'd send this to an API
      // eslint-disable-next-line no-console
      console.log("CustomerForm submit:", form);
    }
  };

  return (
    <BS.Card className="mb-4 customer-form">
      <BS.Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="mb-0">Create Customer</h2>
          <BS.Button
            variant="outline-secondary"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Hide" : "Show"}
          </BS.Button>
        </div>
        <BS.Form onSubmit={handleSubmit}>
          <BS.Row>
            <BS.Col md={12} className="mb-3">
              <BS.Form.Group controlId="name">
                <BS.Form.Label>Name</BS.Form.Label>
                <BS.Form.Control
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                  placeholder="Full name"
                />
                <BS.Form.Control.Feedback type="invalid">
                  {errors.name}
                </BS.Form.Control.Feedback>
              </BS.Form.Group>
            </BS.Col>

            {isOpen && (
              <>
                <BS.Col md={12} className="mb-3">
                  <BS.Form.Group controlId="phone">
                    <BS.Form.Label>Phone</BS.Form.Label>
                    <BS.Form.Control
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      isInvalid={!!errors.phone}
                      placeholder="Phone number"
                    />
                    <BS.Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </BS.Form.Control.Feedback>
                  </BS.Form.Group>
                </BS.Col>
              </>
            )}
          </BS.Row>

          {isOpen && (
            <>
              <BS.Row>
                <BS.Col md={12} className="mb-3">
                  <BS.Form.Group controlId="email">
                    <BS.Form.Label>Email</BS.Form.Label>
                    <BS.Form.Control
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      placeholder="name@example.com"
                    />
                    <BS.Form.Control.Feedback type="invalid">
                      {errors.email}
                    </BS.Form.Control.Feedback>
                  </BS.Form.Group>
                </BS.Col>

                {/* keep date_created in the form data but hide the input from the UI */}
                <BS.Form.Control
                  type="hidden"
                  name="date_created"
                  value={form.date_created}
                />
              </BS.Row>

              <BS.Form.Group controlId="address" className="mb-3">
                <BS.Form.Label>Address</BS.Form.Label>
                <BS.Form.Control
                  as="textarea"
                  rows={3}
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Street, City, State, ZIP"
                />
              </BS.Form.Group>

              <div className="d-flex gap-2">
                <BS.Button type="submit" variant="primary">
                  Save Customer
                </BS.Button>
                <BS.Button
                  type="button"
                  variant="secondary"
                  onClick={() =>
                    setForm({
                      name: "",
                      phone: "",
                      email: "",
                      address: "",
                      date_created: today,
                    })
                  }
                >
                  Reset
                </BS.Button>
              </div>
            </>
          )}
        </BS.Form>
      </BS.Card.Body>
    </BS.Card>
  );
};

export default CustomerForm;
