import Form from "react-bootstrap/Form";

const TextInput = ({
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
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </Form.Group>
  );
};

export default TextInput;
