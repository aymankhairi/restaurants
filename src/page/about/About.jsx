import React from "react";
import "../../css/about.css";
import PageTransition from "../../components/PageTransition";
import chefImg from "../../img/chef.webp";
import storyHero from "../../img/storyHero.webp";
import { useNavigate } from "react-router-dom";

function Story() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="story_page">
        {/* HERO */}
        <section
          className="story_hero"
          style={{ backgroundImage: `url(${storyHero})` }}
        >
          <div className="story_overlay" />
          <div className="story_hero_content">
            <span className="story_tag">Our Philosophy</span>
            <h1>A Story of Craft & Emotion</h1>
            <p>
              Every dish begins long before it reaches the table — in silence,
              precision, and passion.
            </p>
          </div>
        </section>

        {/* PHILOSOPHY */}
        {/* <section className="story_section">
          <div className="story_block">
            <h2>The Essence of Reverie</h2>
            <p>
              We believe dining is not consumption — it is memory creation. Each
              plate is designed to awaken emotion through texture, temperature,
              and time.
            </p>
          </div>
        </section> */}

        {/* CHEF STORY */}
        <section className="story_split">
          <div className="story_text">
            <span className="story_tag">The Chef</span>
            <h2>Where Vision Becomes Flavor</h2>
            <p>
              Our head chef trained across Michelin kitchens in Paris, Tokyo,
              and Copenhagen, refining a philosophy rooted in restraint and
              precision.
            </p>

            <p className="story_quote">
              “True luxury is not excess — it is perfection in simplicity.”
            </p>
          </div>

          <div className="story_image">
            <img src={chefImg} alt="Chef" />
          </div>
        </section>

        {/* CLOSING */}
        <section className="story_cta">
          <h2>Experience the Story Yourself</h2>
          <p>
            Reserve a table and become part of a dining experience designed
            around emotion, not expectation.
          </p>

          <button className="btn_primary" onClick={() => navigate("/book")}>
            Reserve a Table
          </button>
        </section>
      </div>
    </PageTransition>
  );
}

export default Story;
