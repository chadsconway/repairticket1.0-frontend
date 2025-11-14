const dump2 = () => {
  return (
    <div>
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

          <BS.Form.Group controlId="labor_time" className="labor-time-field">
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
          <BS.Button type="button" variant="primary" onClick={handleAddPart}>
            Add Part
          </BS.Button>
          <BS.Button type="button" variant="danger" onClick={clearPartFields}>
            Clear Part Fields
          </BS.Button>
        </div>
      </div>
    </div>
  );
};
