import React from "react";
import { Link } from "react-router-dom";
import styles from './Review.module.css'

const Review = ({ formData }) => {
  return (
    <section className={styles.container}>
      <h2>Review Your Details</h2>
      <div>
        <strong>First Name:</strong> {formData.firstName} <br />
        <strong>Last Name:</strong> {formData.lastName} <br />
        <strong>Email:</strong> {formData.email} <br />
        <strong>Address:</strong> {formData.address} <br />
        <strong>Hobbies:</strong>
        <ul>
          {[...Array(10)].map((_, index) => (
            <li key={index}>{formData[`hobby${index + 1}`]}</li> //displaying 10 textboxes
          ))}
        </ul>
      </div>
      <div className={styles.buttons}>
        <Link to="/hobbies">
          <button type="button">Back</button>
        </Link>
        <Link to="/success">
          <button type="button">Submit</button>
        </Link>
      </div>
    </section>
  );
};

export default Review;
