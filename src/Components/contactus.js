import React, { useState } from "react";
import "./contactus.css"; // Ensure this CSS file matches the style you want

const ContactForm = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "7b45c442-2ffa-4a44-b0b8-efb14c4a7aa9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <section>
      <div className="listing-hero">
        <div className="hero-heading">
          <div className="hero-large">Contact Us.</div>
          <div className="hero-text">
            <i>Got any Questions? Feel free to ask.</i>
          </div>
        </div>
      </div>

      <div className="container-contact">
        <div className="wrap-contact">
          <form
            name="contact"
            className="contact-form validate-form"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="wrap-input validate-input">
              <input className="input" type="text" name="name" placeholder="Full Name" required />
            </div>

            <div className="wrap-input validate-input">
              <input className="input" type="email" name="email" placeholder="E-mail" required />
            </div>

            <div className="wrap-input validate-input">
              <textarea className="input" name="message" placeholder="Your Message" required></textarea>
            </div>

            <div className="container-contact-form-btn">
              <button type="submit" className="contact-form-btn">
                <span>Send</span>
              </button>
            </div>

            <div className="grid-container">
              <div className="item1 left-align">
                <i className="fa fa-lg fa-map-marker-alt"></i>Chennai 641008
              </div>
              <div className="item4 right-align">
                <i className="fa fa-lg fa-phone"></i> (+91)8508901001<br />

                
              </div>
            </div>

            <div className="result-message">{result}</div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
