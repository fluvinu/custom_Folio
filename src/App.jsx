import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
function App() {
  return (
    <div>
      {/* Header (Navbar) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My Website</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

       {/* Slider Section (Carousel) */}
      <div
        id="carouselExampleControls"
        className="carousel slide mt-5" // Add margin-top here
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://via.placeholder.com/1920x600/007bff/ffffff?text=Slide+1"
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/1920x600/007bff/ffffff?text=Slide+2"
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/1920x600/007bff/ffffff?text=Slide+3"
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Main Content Section */}
      <div id="home" className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-12">
            <h2>Welcome to Our Website</h2>
            <p>This is the main content section where you can add your content, text, images, etc.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
              Suspendisse potenti. Nulla pretium augue at risus tempor, ac vehicula leo accumsan.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container mt-5 pt-5">
        <h2>About Us</h2>
        <p>
          Welcome to our website. We specialize in creating beautiful websites for our clients.
        </p>

        {/* Gallery Section */}
        <h3>Our Gallery</h3>
        <div className="row g-4">
          {/* Image 1 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/1920x600/007bff/ffffff?text=Slide+1"  // Adjust path to your image
                className="card-img-top"
                alt="Gallery Image 1"
              />
            </div>
            <p>corrupti veritatis sed eaque sapium ipsum eum quia enim adipisci sapiente non amet.</p>

          </div>

          {/* Image 2 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/1920x600/007bff/ffffff?text=Slide+2"  // Adjust path to your image
                className="card-img-top"
                alt="Gallery Image 2"
              />
            </div>
            <p>corrupti veritatis sed eaque sapium ipsum eum quia enim adipisci sapiente non amet.</p>

          </div>

          {/* Image 2 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/1920x600/007bff/ffffff?text=Slide+2"  // Adjust path to your image
                className="card-img-top"
                alt="Gallery Image 2"
              />
            </div>
            <p>corrupti veritatis sed eaque sapium ipsum eum quia enim adipisci sapiente non amet.</p>

          </div>

          {/* Image 2 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/1920x600/007bff/ffffff?text=Slide+2"  // Adjust path to your image
                className="card-img-top"
                alt="Gallery Image 2"
              />
            </div>
            <p>corrupti veritatis sed eaque sapium ipsum eum quia enim adipisci sapiente non amet.</p>

          </div>

        {/* Image 2 */}
        <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/1920x600/007bff/ffffff?text=Slide+2"  // Adjust path to your image
                className="card-img-top"
                alt="Gallery Image 2"
              />
            </div>
            <p>Lorem ipsum dolor  Deserunt animi ea nesciunasperiores repellat?</p>

          </div>

          {/* Image 3 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/1920x600/007bff/ffffff?text=Slide+3"  // Adjust path to your image
                className="card-img-top"
                alt="Gallery Image 3"
              />
            </div>
            <p>corrupti veritatis sed eaque sapium ipsum eum quia enim adipisci sapiente non amet.</p>

          </div>
        </div>
      </div>

       {/* Contact Form Section */}
       <div id="contact" className="container mt-5">
        <h2>Contact Us</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div>
      {/* Your other sections like carousel, about, etc. */}

      {/* Footer Section with social media icons */}
      <footer className="footer mt-5 bg-light py-3">
        <div className="container text-center">
          <p>&copy; 2025 My Website | Address: 123 Main St, City, Country</p>
          
          {/* Social Media Icons */}
          <div>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} color="blue" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} color="skyblue" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} color="purple" />
            </a>
          </div>
        </div>
      </footer>
    </div>


    </div>
    
    
  );
}

export default App;
