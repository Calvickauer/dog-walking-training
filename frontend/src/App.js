import React from "react";
import "./styles.css";

function App() {
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
      
        const form = e.target;
        const formData = new FormData(form);
      
        try {
          const response = await fetch("https://formspree.io/f/meoowqdb", {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          });
      
          if (response.ok) {
            alert("Form submitted successfully!");
            form.reset(); // Optional: Reset the form after successful submission
          } else {
            const errorData = await response.json();
            console.error("Error:", errorData);
            alert("Failed to submit the form. Please try again later.");
          }
        } catch (error) {
          console.error("Submission error:", error);
          alert("An error occurred. Please try again later.");
        }
      };
      

  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Calvin's Dog Walking & Training</h1>
          <p>Genuine care for your furry friends in Monterey County, California.</p>
          <a href="#contact" className="cta-button">Contact Me</a>
        </div>
      </header>

      {/* About Section */}
      <div class="custom-shape-divider-bottom-1737248207">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".5" class="shape-fill" fill='fffff'></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".8" class="shape-fill" fill='#1193ad'></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
      <section className="about" id="about">
        <h2>About Me</h2>
        <img src="/me.JPEG" alt="Calvin's Profile" />
        <div className="about-divider"></div>
        <p>
          I’ve been working with dogs my whole life, both big and small. From leash
          to off-leash training, I specialize in making sure your dog is well-behaved
          and happy. Whether it’s walking, training, or caring for other animals, I
          bring genuine love and care to every pet.
        </p>
        <p>
          Located in Monterey County, California, I work with all breeds and
          temperaments.
        </p>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2 className="services-title">Services</h2>
        <div className="services-grid">
          <div className="service">
            <h3>Dog Walking</h3>
            <p>One-hour walk: $50</p>
            <p>One-hour walk + 30 minutes training: $100</p>
          </div>
          <div className="service">
            <h3>Training</h3>
            <p>30-minute session: $60</p>
            <p>One-hour session: $100</p>
          </div>
          <div className="service">
            <h3>Other Animal Care</h3>
            <p>Need help with other pets? I can assist with feeding, care, and more.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="contact-title">Contact Me</h2>
        <form action="https://formspree.io/f/meoowqdb" method="POST" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <select name="service" required>
            <option value="">Select a Service</option>
            <option value="Dog Walking">Dog Walking</option>
            <option value="Training">Training</option>
            <option value="Dog Walking + Training">Dog Walking + Training</option>
            <option value="Other Animal Care">Other Animal Care</option>
          </select>
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </section>

      {/* Paw Print Animation */}
      <div className="paw-animation-left">
        <img src="/paw.png" alt="Paw Print" className="paw-left" />
      </div>

           {/* Right Side (Upwards) */}
      <div className="paw-animation-right">
        <img src="/paw.png" alt="Paw Print" className="paw-right" />
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Calvin's Dog Walking & Training Services. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
