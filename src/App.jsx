import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Hobbies from "./Hobbies/Hobbies";
import NavBar from "./NavBar/NavBar";
import ContactDetails from "./ContactDetails/ContactDetails";
import Review from "./Review/Review";
import Success from "./Success/Success";

function App() {
  // State to store form data, including contact details and hobbies.
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    hobby1: "",
    hobby2: "",
    hobby3: "",
    hobby4: "",
    hobby5: "",
    hobby6: "",
    hobby7: "",
    hobby8: "",
    hobby9: "",
    hobby10: "",
  });

  const resetFormData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      hobby1: "",
      hobby2: "",
      hobby3: "",
      hobby4: "",
      hobby5: "",
      hobby6: "",
      hobby7: "",
      hobby8: "",
      hobby9: "",
      hobby10: "",
    });
  };

  // Function to handle changes in form inputs.
  // It updates the specific field in formData when the input value changes.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Spread operator keeps previous data
      [name]: value, // Update the specific field being changed
    });
  };
  return (
    <>
      {/* Wrapping the entire application in Router to enable routing. */}
      <Router>
        {/* NavBar component that will appear at the top of every page */}
        <NavBar />

        {/* Define all the routes in the application */}
        <Routes>
          {/* Route for the contact details form */}
          <Route
            path="/"
            element={
              <ContactDetails formData={formData} handleChange={handleChange} />
            }
          />

          {/* Route for the hobbies form */}
          <Route
            path="/hobbies"
            element={
              <Hobbies formData={formData} handleChange={handleChange} />
            }
          />

          {/* Route for the review page */}
          <Route path="/review" element={<Review formData={formData} />} />

          {/* Route for the success page */}
          <Route path="/success" element={<Success resetFormData={resetFormData}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
