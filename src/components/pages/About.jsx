import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* ===== Hero Banner ===== */}
      <div className="background-image" data-aos="fade-down">
        <div className="text-container" data-aos="zoom-in">
          <h1>About</h1>
          <h2>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Home
            </Link>
            / About
          </h2>
        </div>
      </div>

      {/* ===== About Section ===== */}
      <div className="hero">
        <div className="hero-image" data-aos="fade-right">
          <img src="about1.jpg" alt="About section" />
        </div>
        <div className="hero-text" data-aos="fade-left">
          <h1>About JASON STEVENS</h1>
          <h4>Crossfit, Box</h4>
          <p>
            World is committed to making participation in the event harassment
            free for everyone, regardless of experience level, gender identity,
            or personal background.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Suspendisse tempus felis a libero mollis ultrices.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Suspendisse tempus felis a libero mollis ultrices.</li>
          </ul>
        </div>
      </div>

      {/* ===== Stats Section ===== */}
      <div className="count">
        <div data-aos="zoom-in" data-aos-delay="100">
          <h2>532<span>+</span></h2>
          <h5>Increase in sales</h5>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <h2>257<span>+</span></h2>
          <h5>Email marketing</h5>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <h2>856<span>+</span></h2>
          <h5>Customer Engagement</h5>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400">
          <h2>963<span>+</span></h2>
          <h5>SEO Optimize</h5>
        </div>
      </div>

      {/* ===== Instructors Section ===== */}
      <div className="section6">
        <div className="section6-text" data-aos="fade-up">
          <h1>OUR INSTRUCTORS</h1>
          <h3 className="LR7">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br />
            <span className="LR9">
              Readable content of a page when looking at its layout.
            </span>
          </h3>
        </div>
        <div className="section6-img">
          <div className="instructor" data-aos="flip-left" data-aos-delay="100">
            <img src="team1.jpg" alt="Instructor 1" />
            <h3>BEN JOHNSON</h3>
            <h5>FITNESS TRAINER</h5>
          </div>
          <div className="instructor" data-aos="flip-left" data-aos-delay="200">
            <img src="team2.jpg" alt="Instructor 2" />
            <h3>CLARA SMITH</h3>
            <h5>FITNESS TRAINER</h5>
          </div>
          <div className="instructor" data-aos="flip-left" data-aos-delay="300">
            <img src="team3.jpg" alt="Instructor 3" />
            <h3>AMY WALKER</h3>
            <h5>FITNESS TRAINER</h5>
          </div>
        </div>
      </div>

      {/* ===== CTA Section ===== */}
      <div className="Blue-S" data-aos="fade-up">
        <div className="SLAH" data-aos="fade-right">
          <h2>Start living a healthy lifestyle</h2>
          <h3>
            <span className="EA">
              Ed nisl id iaculis felis eu penatibus. Eget at velit convallis pretium
              ullamcorper viverra ipsum nisl. In morbi sed in lorem.
            </span>
            <br />
            <span className="EA-2">
              Adipiscing id viverra vel. Adipiscing sed diam suspe.
            </span>
          </h3>
        </div>
        <div className="B-GT20" data-aos="fade-left">
          <button>Get Started →</button>
        </div>
      </div>
    </>
  );
};

export default About;
