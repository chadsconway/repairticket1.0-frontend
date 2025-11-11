const LaborForm = () => {
  return (
    <BS.Card className="mb-4 customer-form">
      <BS.Card.Body>
        <h2 className="mb-3">Update Repair Ticket</h2>
        <BS.Form onSubmit={handleSubmit}>
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
        </BS.Form>
      </BS.Card.Body>
    </BS.Card>
  );
};

export default LaborForm;
