import { useState, useEffect } from "react";
import * as BS from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactIcons from "./components/react-icons.jsx";
import CustomerForm from "./components/CustomerForm.jsx";
import RepairTicketForm from "./components/RepairTicketForm.jsx";
import RepairTicketUpdateForm from "./components/RepairTicketUpdateForm.jsx";
import TextInput from "./components/inputs/TextInput.jsx";
import TextAreaInput from "./components/inputs/TextAreaInput.jsx";
import IDGenerator from "./components/inputs/IDGenerator.jsx";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Switch>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/users">
    //         <Users />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    // <>
    //   <Header />
    //   <main className="py-3">
    //     <Container>
    //       <Outlet />
    //     </Container>
    //   </main>
    //   <Footer />
    // </>
    <>
      <CustomerForm />
      <br />
      {/* <RepairTicketForm /> */}
    </>
  );
};

export default App;
