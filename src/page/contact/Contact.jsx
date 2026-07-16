import React from "react";
import "../../css/contact.css";
import PageTransition from "../../components/PageTransition";

import visitImg from "../../img/visit.webp";

function Contact() {
  const darkStyle = [
    { elementType: "geometry", stylers: [{ color: "#0f0f0f" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#0f0f0f" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#c6a15b" }] },
    {
      featureType: "water",
      stylers: [{ color: "#000000" }],
    },
  ];
  return (
    <PageTransition>
      <div className="visit_page">
        {/* HERO */}
        <section
          className="visit_hero"
          style={{ backgroundImage: `url(${visitImg})` }}
        >
          <div className="visit_overlay" />

          <div className="visit_hero_content">
            <span className="visit_tag">Find Us</span>
            <h1>Visit Our Restaurant</h1>
            <p>
              A hidden place where elegance, flavor, and atmosphere come
              together.
            </p>
          </div>
        </section>

        {/* INFO SECTION */}
        <section className="visit_section">
          <div className="visit_grid">
            <div className="visit_card">
              <h3> Location</h3>
              <p>
                123 Luxury Avenue <br />
                Los Angeles, CA
              </p>
            </div>

            <div className="visit_card">
              <h3> Opening Hours</h3>
              <p>
                Mon - Fri: 3:00 PM - 01:00 AM <br />
                Sat - Sun: 4:00 PM - 01:00 AM
              </p>
            </div>

            <div className="visit_card">
              <h3> Contact</h3>
              <p>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noreferrer"
                >
                  +1 (555) 123-4567
                </a>
                <br />
                <a href="mailto:booking@restaurant.com">
                  booking@restaurant.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="visit_map_section">
          <div className="visit_map_container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              loading="lazy"
            ></iframe>
            <div className="map_overlay"></div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export default Contact;
