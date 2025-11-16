// import React, { useState } from "react";
// import * as BS from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Stack from "react-bootstrap/Stack";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import "./CustomerForm.css";

// /**
//  * CustomerForm
//  * Fields: name, phone, email, address, date_created
//  * Props:
//  *  - onSubmit (optional) receives the form object when submitted
//  */
// const CustomerForm = ({ onSubmit }) => {
//   const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

//   const [fname, setFame] = useState();
//   const [phone, setPhone] = useState();
//   const [email, setEmail] = useState();
//   const [address, setAddress] = useState();

//   const [errors, setErrors] = useState({});
//   const [isOpen, setIsOpen] = useState(true);

//   const validate = () => {
//     const err = {};
//     if (!fname.trim()) err.fname = "First name is required";
//     if (!lname.trim()) err.lname = "Last name is required";
//     if (!email.trim()) err.email = "Email is required";
//     // basic email pattern
//     if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
//       err.email = "Enter a valid email";
//     if (!phone.trim()) err.phone = "Phone is required";
//     return err;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const err = validate();
//     setErrors(err);
//     if (Object.keys(err).length > 0) return;

//     // call optional callback or log to console
//     if (typeof onSubmit === "function") {
//       onSubmit({
//         fname,
//         lname,
//         phone,
//         email,
//         address,
//         customerId,
//         date_created: today,
//       });
//     } else {
//       // fallback: log the collected data
//       // In a real app you'd send this to an API
//       // eslint-disable-next-line no-console
//       console.log("Customersubmit:", {
//         fname,
//         lname,
//         phone,
//         email,
//         address,
//         customerId,
//         date_created: today,
//       });
//     }
//   };

//   return (
//     // Card Wrapper
//     <Container>
//       <Row>
//         <h2 className="mb-0">Create Customer</h2>
//         <BS.Button
//           variant="outline-secondary"
//           size="sm"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? "Hide" : "Show"}
//         </BS.Button>
//       </Row>
//       >{/* **************Begin Customer Form*********************  */}
//       <Form onSubmit={handleSubmit}>
//         {/* <BS.Form onSubmit={handleSubmit}> */}
//         {/* BEGIN - Form Input Element */}
//         <BS.Row>

//             <BS.Form.Group controlId="name">
//               <BS.Form.Label>19 maame</BS.Form.Label>
//               <BS.Form.Control
//                 name="name"
//                 value={name}
//                 onChange={handleChange}
//                 isInvalid={!!errors.name}
//                 placeholder="Full name"
//               />
//               <BS.Form.Control.Feedback type="invalid">
//                 {errors.name}
//               </BS.Form.Control.Feedback>
//             </BS.Form.Group>
//           </BS.Col>
//           {/* END - Form Input Element */}
//           {/* BEGIN - Form Input Element */}
//           {isOpen && (
//             <>
//               <BS.Col md={12} className="mb-3">
//                 <BS.Form.Group controlId="phone">
//                   <BS.Form.Label>Phone</BS.Form.Label>
//                   <BS.Form.Control
//                     name="phone"
//                     value={phone}
//                     onChange={handleChange}
//                     isInvalid={!!errors.phone}
//                     placeholder="Phone number"
//                   />
//                   <BS.Form.Control.Feedback type="invalid">
//                     {errors.phone}
//                   </BS.Form.Control.Feedback>
//                 </BS.Form.Group>
//               </BS.Col>
//             </>
//           )}
//         </BS.Row>
//         {/* END - Form Input Element */}
//         {/* BEGIN - Form Input Element */}
//         {isOpen && (
//           <>
//             <BS.Row>
//               <BS.Col md={12} className="mb-3">
//                 <BS.Form.Group controlId="email">
//                   <BS.Form.Label>Email</BS.Form.Label>
//                   <BS.Form.Control
//                     type="email"
//                     name="email"
//                     value={email}
//                     onChange={handleChange}
//                     isInvalid={!!errors.email}
//                     placeholder="name@example.com"
//                   />
//                   <BS.Form.Control.Feedback type="invalid">
//                     {errors.email}
//                   </BS.Form.Control.Feedback>
//                 </BS.Form.Group>
//               </BS.Col>

//               {/* keep date_created in the form data but hide the input from the UI */}
//               <BS.Form.Control
//                 type="hidden"
//                 name="date_created"
//                 value={date_created}
//               />
//             </BS.Row>
//             {/* END - Form Input Element */}
//             {/* BEGIN - Form Input Element */}
//             <BS.Form.Group controlId="address" className="mb-3">
//               <BS.Form.Label>Address</BS.Form.Label>
//               <BS.Form.Control
//                 as="textarea"
//                 rows={3}
//                 name="address"
//                 value={address}
//                 onChange={handleChange}
//                 placeholder="Street, City, State, ZIP"
//               />
//             </BS.Form.Group>
//             {/* END - Form Input Element */}

//             {/* @ELEMENT: submit and clear */}
//             <div className="d-flex gap-2">
//               <BS.Button type="submit" variant="primary">
//                 Save Customer
//               </BS.Button>
//               <BS.Button
//                 type="button"
//                 variant="secondary"
//                 onClick={() => {
//                   setFname("");
//                   setLname("");
//                   setPhone("");
//                   setEmail("");
//                   setAddress("");
//                   setDateCreated(today);
//                 }}
//               >
//                 Reset
//               </BS.Button>
//             </div>
//           </>
//         )}
//       </Form>
//     </Container>
//   );
// };

// export default CustomerForm;
