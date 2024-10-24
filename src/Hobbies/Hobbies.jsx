import React from "react";
import { Link } from "react-router-dom";

const Hobbies = ({ formData, handleChange }) => {
  return (
    <>
      <h2>Hobbies</h2>
      <form>
        {[...Array(10)].map((_, index) => (  //Shortcut to display 10 text inputs
          <input
            key={index}
            type="text"
            name={`hobby${index + 1}`}
            placeholder={`Hobby ${index + 1}`}
            value={formData[`hobby${index + 1}`] || ""}
            onChange={handleChange}
          />
        ))}
        <Link to="/">
          <button type="button">Back</button>
        </Link>
        <Link to="/review">
          <button type="button">Next</button>
        </Link>
      </form>
    </>
  );
};

export default Hobbies;
