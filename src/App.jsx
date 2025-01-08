import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [content, setContent] = useState({
    header: {
      title: "",
      image: "",
    },
    about: {
      title: "",
      text: "",
    },
    gallery: [],
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [editMode, setEditMode] = useState(true);

  // Load content from Express server on page load
  useEffect(() => {
    fetch("https://nakshatra-api.netlify.app/api/content")
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(err => console.error("Failed to load content", err));
  }, []);

  // Function to update content in the backend
  const updateContent = (updatedContent) => {
    fetch("https://nakshatra-api.netlify.app/api/content", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContent),
    })
      .then(response => response.json())
      .then(data => setContent(data.content))
      .catch(err => console.error("Failed to update content", err));
  };

  const handleLogin = () => {
    if (adminPassword === "admin123") {
      setIsAdmin(true);
    } else {
      alert("Invalid password!");
    }
  };

  const handleSave = (section, field, value) => {
    const updatedContent = {
      ...content,
      [section]: {
        ...content[section],
        [field]: value,
      },
    };
    updateContent(updatedContent);
  };

  const handleDelete = (section, index) => {
    if (section === "gallery") {
      const newGallery = content.gallery.filter((_, i) => i !== index);
      const updatedContent = { ...content, gallery: newGallery };
      updateContent(updatedContent);
    }
  };

  let lastScrollY = 0;
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Admin Login */}
      {!isAdmin && (
        <div>
          <input
            type="password"
            placeholder="Admin Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {/* Header (Navbar) */}
      <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${showHeader ? "" : "d-none"}`}>
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
              <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Slider Section (Carousel) */}
      <div id="carouselExampleControls" className="carousel slide mt-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {content.gallery.map((item, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              {isAdmin && editMode ? (
                <center>
                  <div>
                    <input
                      type="text"
                      value={item.src}
                      onChange={(e) => handleSaveGalleryImage(index, e.target.value)}
                    />
                    <button onClick={() => setEditMode(false)}>Save</button>
                  </div>
                </center>
              ) : (
                <img src={item.src} className="d-block w-100" alt={item.alt} />
              )}
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Home Section */}
      {/* <div id="home" className="container mt-5 pt-5">
        <h2>{content.header.title}</h2>
        {isAdmin && editMode && (
          <div>
            <input
              type="text"
              value={content.header.title}
              onChange={(e) => handleSave("header", "title", e.target.value)}
            />
            <button onClick={() => setEditMode(false)}>Save</button>
          </div>
        )}
        <img src={content.header.image} className="img-fluid" alt="Header Image" />
        {isAdmin && editMode && (
          <div>
            <input
              type="text"
              value={content.header.image}
              onChange={(e) => handleSave("header", "image", e.target.value)}
            />
            <button onClick={() => setEditMode(false)}>Save</button>
          </div>
        )}
      </div> */}

    {/* Main Content Section */}
    <div id="home" className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-12">
            {/* Editable Title */}
            <h2>
              {isAdmin && editMode ? (
                <input
                  type="text"
                  value={content?.main?.title || ""}
                  onChange={(e) => handleSave("main", "title", e.target.value)}
                />
              ) : (
                content?.main?.title || "Default Title"
              )}
            </h2>

            <div className="row">
              {/* Editable Text Content */}
              <div className="col-12 col-md-6 mb-4">
                {isAdmin && editMode ? (
                  <textarea
                    value={content?.main?.text || ""}
                    onChange={(e) => handleSave("main", "text", e.target.value)}
                  />
                ) : (
                  <p>{content?.main?.text || "Default content text"}</p>
                )}
              </div>

              {/* Editable YouTube Video Embed */}
              <div className="col-12 col-md-6 mb-4">
                {isAdmin && editMode ? (
                  <div>
                    <input
                      type="text"
                      value={content?.main?.videoUrl || ""}
                      onChange={(e) => handleSave("main", "videoUrl", e.target.value)}
                    />
                    <button onClick={() => setEditMode(false)}>Save</button>
                  </div>
                ) : (
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "100%" }}>
                    <iframe
                      src={content?.main?.videoUrl}
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                      title="YouTube video"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* About Section */}
      <div id="about" className="container mt-5 pt-5">
        <h2>{content.about.title}</h2>
        <p>{content.about.text}</p>
        {isAdmin && editMode && (
          <div>
            <input
              type="text"
              value={content.about.title}
              onChange={(e) => handleSave("about", "title", e.target.value)}
            />
            <textarea
              value={content.about.text}
              onChange={(e) => handleSave("about", "text", e.target.value)}
            />
            <button onClick={() => setEditMode(false)}>Save</button>
          </div>
        )}
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="container mt-5 pt-5">
        <h3>Our Gallery</h3>
        <div className="row g-4">
          {content.gallery.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img src={item.src} className="card-img-top" alt={item.alt} />
              </div>
              {isAdmin && editMode && (
                <div>
                  <input
                    type="text"
                    value={item.src}
                    onChange={(e) => {
                      const newGallery = [...content.gallery];
                      newGallery[index].src = e.target.value;
                      handleSave("gallery", index, newGallery);
                    }}
                  />
                  <button onClick={() => handleDelete("gallery", index)}>Delete</button>
                </div>
              )}
            </div>
          ))}
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

      {/* Footer Section */}
      <footer className="footer mt-5 bg-light py-3">
        <div className="container text-center">
          <p>&copy; 2025 My Website | Address: 123 Main St, City, Country</p>
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
  );
}

export default App;
