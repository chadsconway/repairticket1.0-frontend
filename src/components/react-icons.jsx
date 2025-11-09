import { useState, useEffect } from "react";
import * as BS from "react-bootstrap";
import { BsSun, BsMoonFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

const ReactIcons = () => {
  return (
    <BS.Container className="py-4">
      <BS.Button variant="primary">
        {" "}
        <BsMoonFill className="me-2" />
        BsMoonFill Icon
      </BS.Button>

      <BS.Button variant="primary">
        <BsSun className="me-2" />
        BsSunIcon
      </BS.Button>
    </BS.Container>
  );
};

export default ReactIcons;
