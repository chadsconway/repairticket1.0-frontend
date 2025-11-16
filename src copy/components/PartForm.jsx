import React, { useState } from "react";
import * as BS from "react-bootstrap";

const AddPartForm = ({
  part_description,
  part_number,
  vendor,
  price,
  retail_price,
  handlePartInputChange,
  handleAddPart,
  clearPartFields,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="parts-container mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="parts-fields-title mb-0">Parts</h3>
        <BS.Button
          variant="outline-secondary"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Hide" : "Show"}
        </BS.Button>
      </div>

      {isOpen && (
        <>
          <div className="parts-fields-container-single mb-3">
            <BS.Form.Group controlId="part_description">
              <BS.Form.Label>Description</BS.Form.Label>
              <BS.Form.Control
                type="text"
                name="part_description"
                value={part_description}
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
                value={part_number}
                onChange={handlePartInputChange}
                placeholder="Part number"
              />
            </BS.Form.Group>

            <BS.Form.Group controlId="vendor">
              <BS.Form.Label>Vendor</BS.Form.Label>
              <BS.Form.Control
                type="text"
                name="vendor"
                value={vendor}
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
                value={price}
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
                value={retail_price}
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
        </>
      )}
    </div>
  );
};

export default AddPartForm;

// *************************
// <div className="parts-fields-container mb-4">
//   <div className="mb-3">
//     <h3 className="parts-fields-title mb-0">Parts</h3>
//   </div>
//   <BS.Row className="mb-3">
//     <BS.Col md={4}>
//       <BS.Form.Group controlId="part_description">
//         <BS.Form.Label>Description</BS.Form.Label>
//         <BS.Form.Control
//           type="text"
//           name="part_description"
//           value={part_description}
//           onChange={handlePartInputChange}
//           placeholder="Enter part description"
//         />
//       </BS.Form.Group>
//     </BS.Col>
//     <BS.Col md={2}>
//       <BS.Form.Group controlId="part_number">
//         <BS.Form.Label>Part #</BS.Form.Label>
//         <BS.Form.Control
//           type="text"
//           name="part_number"
//           value={part_number}
//           onChange={handlePartInputChange}
//           placeholder="Part number"
//         />
//       </BS.Form.Group>
//     </BS.Col>
//     <BS.Col md={2}>
//       <BS.Form.Group controlId="vendor">
//         <BS.Form.Label>Vendor</BS.Form.Label>
//         <BS.Form.Control
//           type="text"
//           name="vendor"
//           value={vendor}
//           onChange={handlePartInputChange}
//           placeholder="Vendor"
//         />
//       </BS.Form.Group>
//     </BS.Col>
//     <BS.Col md={2}>
//       <BS.Form.Group controlId="price">
//         <BS.Form.Label>Price</BS.Form.Label>
//         <BS.Form.Control
//           type="number"
//           name="price"
//           value={price}
//           onChange={handlePartInputChange}
//           placeholder="Price"
//           min="0"
//           step="0.01"
//         />
//       </BS.Form.Group>
//     </BS.Col>
//     <BS.Col md={2}>
//       <BS.Form.Group controlId="retail_price">
//         <BS.Form.Label>Retail Price</BS.Form.Label>
//         <BS.Form.Control
//           type="number"
//           name="retail_price"
//           value={retail_price}
//           onChange={handlePartInputChange}
//           placeholder="Retail price"
//           min="0"
//           step="0.01"
//         />
//       </BS.Form.Group>
//     </BS.Col>
//   </BS.Row>
//   <div className="d-flex gap-2 mb-3">
//     <BS.Button type="button" variant="primary" onClick={handleAddPart}>
//       Add Part
//     </BS.Button>
//     <BS.Button type="button" variant="danger" onClick={clearPartFields}>
//       Clear Part Fields
//     </BS.Button>
//   </div>
// </div>
