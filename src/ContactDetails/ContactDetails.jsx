import React from "react";
import { Link } from "react-router-dom";
import styles from './ContactDetails.module.css'

const ContactDetails = ({ formData, handleChange }) => {
  // This is called prop destructuring where we directly mention the values we will be using as props
  return (
    <section className={styles.container}>
      <h2>Contact Details</h2>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <Link to="/hobbies">
          <button type="button">Next</button>
        </Link>
      </form>
    </section>
  );
};

export default ContactDetails;
