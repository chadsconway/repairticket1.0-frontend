import Form from "react-bootstrap/Form";

const TextAreaInput = ({
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
        type="textarea"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </Form.Group>
  );
};
export default TextAreaInput;
