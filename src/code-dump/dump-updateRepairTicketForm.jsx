const dump = () => {
  return (
    <div>
      <BS.Row>
        <BS.Col md={6} className="mb-3">
          {/* <BS.Form.Group controlId="repair_ticket_id">
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
                      </BS.Form.Group> */}
        </BS.Col>

        <BS.Col md={6} className="mb-3">
          {/* <BS.Form.Group controlId="status">
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
                      </BS.Form.Group> */}
        </BS.Col>

        <BS.Col md={12} className="mb-3">
          {/* <BS.Form.Group controlId="product_description">
                        <BS.Form.Label>Product Description</BS.Form.Label>
                        <BS.Form.Control
                          name="product_description"
                          value={form.product_description}
                          onChange={handleChange}
                          placeholder="Brief description of the product"
                        />
                      </BS.Form.Group> */}
        </BS.Col>

        <BS.Col md={6} className="mb-3">
          {/* <BS.Form.Group controlId="brand">
                        <BS.Form.Label>Brand</BS.Form.Label>
                        <BS.Form.Control
                          name="brand"
                          value={form.brand}
                          onChange={handleChange}
                          placeholder="Brand"
                        />
                      </BS.Form.Group> */}
        </BS.Col>

        <BS.Col md={6} className="mb-3"></BS.Col>

        <BS.Col md={6} className="mb-3">
          {/* <BS.Form.Group controlId="serial_number">
                        <BS.Form.Label>Serial Number</BS.Form.Label>
                        <BS.Form.Control
                          name="serial_number"
                          value={form.serial_number}
                          onChange={handleChange}
                          placeholder="Serial Number"
                        />
                      </BS.Form.Group> */}
        </BS.Col>

        <BS.Col md={12} className="mb-3">
          {/* <BS.Form.Group controlId="issue_description">
                      <BS.Form.Label>Issue Description</BS.Form.Label>
                      <BS.Form.Control
                        as="textarea"
                        rows={3}
                        name="issue_description"
                        value={form.issue_description}
                        onChange={handleChange}
                        placeholder="Describe the issue in detail"
                      />
                    </BS.Form.Group> */}
        </BS.Col>
      </BS.Row>
    </div>
  );
};

export default dump;
