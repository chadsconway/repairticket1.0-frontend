const EstimateForm = () => {
  return (
    <BS.Card className="mb-4 customer-form">
      <BS.Card.Body>
        <h2 className="mb-3">Update Repair Ticket</h2>
        <BS.Form onSubmit={handleSubmit}></BS.Form>
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
      </BS.Card.Body>
    </BS.Card>
  );
};

export default EstimateForm;
