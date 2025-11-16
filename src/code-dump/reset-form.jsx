const resetForm = () => {
  return (
    <button
      onClick={() => {
        setFname("");
        setLname("");
        setPhone("");
        setEmail("");
        setAddress("");
        setDateCreated(today);
      }}
    ></button>
  );
};

export default resetForm;
