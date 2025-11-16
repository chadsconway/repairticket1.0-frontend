import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

const IDGenerator = ({ lname }) => {
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const day = new Date().getDate();
  const first3 = lname.trim().slice(0, 3).toUpperCase();
  const custID = `${first3}${month}${day}${year}`;

  useEffect(() => {
    console.log("year: ", year);
    console.log("month: ", month);
    console.log("day: ", day);
    console.log("first3: ", first3);
    console.log("Generated Customer ID:", custID);
  }, []);

  return <>ID</>;
};

export default IDGenerator;
