import React from "react";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;

    // Validation: Ensure either email or phone is provided
    if (!email && !phone) {
      alert("Please provide either an email or a phone number.");
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <form action="https://formspree.io/f/meoowqdb" method="POST">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send</button>
  </form>
  
  );
}

export default App;
