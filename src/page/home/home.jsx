import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/home.css";
import PageTransition from "../../components/PageTransition";
import CrispyCalamari from "../../img/CrispyCalamari.webp";
import TunaTartare from "../../img/TunaTartare.webp";
import FoieGrasToast from "../../img/FoieGrasToast.webp";
import { WiStars } from "react-icons/wi";

import about from "../../img/about.webp";
import reservationImg from "../../img/reservation.webp";
function Home() {
  const navigate = useNavigate();
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const dishes = [
    {
      img: CrispyCalamari,
      title: "Crispy Calamari",
      desc: "Lightly battered squid rings fried until golden and crunchy, served hot with a zesty dipping sauce",
    },
    {
      img: TunaTartare,
      title: "Tuna Tartare",
      desc: "Finely diced fresh tuna seasoned with citrus, soy, and delicate spices",
    },
    {
      img: FoieGrasToast,
      title: "Foie Gras Toast",
      desc: "Premium caviar served with artisan greens",
    },
  ];
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const [form, setForm] = useState({
    date: "",
    time: "",
    number: "",
    guests: "1 Guest",
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  // ✅ validation
  const validateForm = () => {
    const newErrors = {};

    if (!form.date) newErrors.date = "*Please select a date";
    if (!form.time) newErrors.time = "*Please select a time";
    if (!form.name.trim()) newErrors.name = "*Name is required";
    if (!form.number.trim()) newErrors.number = "*Phone Number is required";

    if (!form.email.trim()) {
      newErrors.email = "*Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "*Enter a valid email address";
    }
    return newErrors;
  };

  // ✅ submit handler
  const handleSubmit = () => {
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setReservationSuccess(false);
      return;
    }

    setErrors({});
    setReservationSuccess(true);

    // optional: reset form after success
    setForm({
      date: "",
      time: "",
      number: "",
      guests: "1 Guest",
      name: "",
      email: "",
    });
  };

  return (
    <PageTransition>
      <div className="home">
        {/* HERO */}
        <section className="hero">
          <div className="hero_overlay" />

          <div className="hero_content">
            <span className="hero_tag">Fine Dining Experience</span>

            <h1>
              Where Taste <br /> Meets Luxury
            </h1>

            <p>
              An unforgettable culinary journey crafted with passion, elegance,
              and the finest ingredients.
            </p>

            <div className="hero_actions">
              <button className="btn_primary" onClick={() => navigate("/book")}>
                Reserve Table
              </button>
              <button
                className="btn_secondary"
                onClick={() => navigate("/menu")}
              >
                View Menu
              </button>
            </div>
          </div>
        </section>

        {/* SIGNATURE */}
        <section className="section">
          <h2 className="section_title">Signature Creations</h2>

          <div className="dish_grid">
            {dishes.map((dish, i) => (
              <div className="dish_card" key={i}>
                <img src={dish.img} alt={dish.title} />

                <div className="dish_overlay">
                  <h3>{dish.title}</h3>
                  <p>{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* STORY */}
        <section className="section story">
          <div className="story_container">
            <div className="story_text">
              <span className="section_tag">Our Heritage</span>

              <h2>
                A Journey Crafted <br /> With Passion
              </h2>

              <p>
                Rooted in timeless culinary traditions, our kitchen blends
                artistry and precision to create an experience that transcends
                dining. Every plate tells a story of craftsmanship, culture, and
                emotion.
              </p>

              <p className="story_quote">
                “We don’t just serve food — we create memories that linger.”
              </p>
              <br />

              <button
                className="btn_secondary"
                onClick={() => navigate("/about")}
              >
                Discover More
              </button>
            </div>
            <div className="story_visual">
              <div className="story_image_wrapper">
                <img src={about} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="experience">
          <div className="experience_overlay" />

          <div className="experience_container">
            <span className="experience_tag">The Atmosphere</span>

            <h2>
              An Evening <br /> Beyond Dining
            </h2>

            <p>
              Step into a world of soft candlelight, curated soundscapes, and
              unforgettable culinary artistry designed to awaken every sense.
            </p>

            <div className="experience_stats">
              <div>
                <h3>20+</h3>
                <p>Signature Dishes</p>
              </div>
              <div>
                <h3>5★</h3>
                <p>Guest Experience</p>
              </div>
              <div>
                <h3>10+</h3>
                <p>Years Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESERVATION */}

        <section
          className="reservation"
          style={{ backgroundImage: `url(${reservationImg})` }}
        >
          <div className="reservation_overlay" />

          <div className="reservation_container">
            {/* SUCCESS MODAL */}
            {reservationSuccess && (
              <div
                className="success_modal_overlay"
                onClick={() => setReservationSuccess(false)}
              >
                <div
                  className="success_modal"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="success_icon">✓</div>

                  <span className="book_tag">Reservation Confirmed</span>

                  <h2>Table Reserved Successfully!</h2>

                  <p>
                    Your reservation is confirmed and we look forward to
                    welcoming you.
                  </p>

                  <button
                    className="btn_primary"
                    onClick={() => setReservationSuccess(false)}
                  >
                    Perfect
                  </button>
                </div>
              </div>
            )}
            <span className="reservation_tag">Private Dining</span>

            <h2>
              Reserve Your <br /> Luxury Experience
            </h2>

            <p>
              Secure your table in advance and enjoy a curated fine dining
              journey designed for unforgettable moments.
            </p>

            {/* FORM */}
            <div className="reservation_form">
              <div
                className="input_group"
                onClick={() => dateRef.current?.showPicker()}
              >
                <input
                  ref={dateRef}
                  type="date"
                  value={form.date}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => {
                    setForm({ ...form, date: e.target.value });
                    setErrors({ ...errors, date: "" });
                  }}
                  className={!form.date ? "empty-date" : ""}
                />

                {!form.date && (
                  <span className="fake_placeholder">Dinner Date</span>
                )}

                {errors.date && (
                  <span className="error_text">{errors.date}</span>
                )}
              </div>
              <div
                className="input_group"
                onClick={() => timeRef.current?.showPicker()}
              >
                <input
                  ref={timeRef}
                  type="time"
                  value={form.time}
                  onChange={(e) => {
                    setForm({ ...form, time: e.target.value });
                    setErrors({ ...errors, time: "" });
                  }}
                  className={!form.time ? "empty-date" : ""}
                />

                {!form.time && (
                  <span className="fake_placeholder">Dinner Time</span>
                )}

                {errors.time && (
                  <span className="error_text">{errors.time}</span>
                )}
              </div>
              <select>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests or more</option>
              </select>
              <div className="field_group">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    setErrors({ ...errors, name: "" });
                  }}
                />
                {errors.name && (
                  <span className="error_text">{errors.name}</span>
                )}
              </div>
              <div className="field_group">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setErrors({ ...errors, email: "" });
                  }}
                />
                {errors.email && (
                  <span className="error_text">{errors.email}</span>
                )}
              </div>

              <input
                type="tel"
                placeholder="Your Number"
                inputMode="numeric"
                pattern="[0-9]*"
                value={form.number}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, ""); // remove non-digits
                  setForm({ ...form, number: onlyNumbers });
                  setErrors({ ...errors, number: "" });
                }}
              />
              {errors.number && (
                <span className="error_text">{errors.number}</span>
              )}
              <button className="btn_primary full_btn" onClick={handleSubmit}>
                Confirm Reservation
              </button>
            </div>

            <div className="reservation_note">
              <WiStars />
              Limited seats available every evening
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export default Home;
