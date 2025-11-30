import Form from "react-bootstrap/Form";

const NumberInput = ({
  controlId,
  label,
  name,
  value,
  onChange,
  required = false,
}) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="number"
        name={name}
        value={value}
        step={step}
        onChange={onChange}
        required={required}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </Form.Group>
  );
};
