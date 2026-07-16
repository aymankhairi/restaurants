import React, { useRef, useState } from "react";
import "../../css/book.css";
import PageTransition from "../../components/PageTransition";
import bookingHero from "../../img/reservation.webp";
import { WiStars } from "react-icons/wi";

function Book() {
  const dateRef = useRef(null);
  const timeRef = useRef(null);

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
      guests: "1 Guest",
      name: "",
      email: "",
    });
  };

  return (
    <PageTransition>
      <div className="book_page">
        {/* HERO */}
        <section
          className="book_hero"
          style={{ backgroundImage: `url(${bookingHero})` }}
        >
          <div className="book_overlay" />
          <div className="book_hero_content">
            <span className="book_tag">Reservation</span>
            <h1>Reserve Your Experience</h1>
            <p>
              Every table is a stage for unforgettable moments. Secure yours.
            </p>
          </div>
        </section>

        {/* FORM */}
        <section className="book_section">
          <div className="book_container">
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

            <span className="book_tag">Private Dining</span>
            <h2>Where Every Moment Becomes a Memory</h2>
            <p>
              Reserve early and embark on a dining journey where every detail is
              crafted to be remembered.
            </p>

            {/* FORM */}
            <div className="book_form">
              <div className="form_row">
                {/* DATE */}
                <div className="input_group">
                  <input
                    ref={dateRef}
                    type="date"
                    value={form.date}
                    min={new Date().toISOString().split("T")[0]}
                    onClick={() => dateRef.current?.showPicker()}
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

                {/* TIME */}
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
              </div>
              {/* GUESTS */}
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests or more</option>
              </select>
              <div className="form_two_cols">
                {/* NAME */}
                <div className="field_group">
                  <input
                    type="text"
                    placeholder="Your Name"
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
                {/* EMAIL */}
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
              </div>

              <input
                type="tel"
                placeholder="+1 555 123 4567"
                inputMode="tel"
                value={form.number}
                onChange={(e) => {
                  let value = e.target.value;

                  // allow + only at the beginning
                  if (value.includes("+")) {
                    value = "+" + value.replace(/\+/g, "");
                  }

                  // keep + only at start, rest digits only
                  value =
                    value.charAt(0) === "+"
                      ? "+" + value.slice(1).replace(/\D/g, "")
                      : value.replace(/\D/g, "");

                  setForm({ ...form, number: value });
                  setErrors({ ...errors, number: "" });
                }}
              />
              {errors.number && (
                <span className="error_text">{errors.number}</span>
              )}
              {/* SUBMIT */}
              <button className="btn_primary full_btn" onClick={handleSubmit}>
                Confirm Reservation
              </button>
            </div>

            <p className="book_note">
              <WiStars />
              Limited seating available. Reservations recommended.
            </p>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export default Book;
