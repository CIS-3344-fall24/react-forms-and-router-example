import React from "react";
import { Link } from "react-router-dom";

const Success = ({ resetFormData }) => {
  const handleClick = () => {
    resetFormData(); //reset form data
  };
  return (
    <div>
      <h2>Form submitted successfully</h2>
      <p>Thank yo for submitting your information</p>

      <Link to="/" onClick={handleClick}>
        <button type="button">Home</button>
      </Link>
    </div>
  );
};

export default Success;
