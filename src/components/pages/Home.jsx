import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true, // Animate only once per scroll
      offset: 100, // Distance from trigger
    });
  }, []);

  const slides = [
    {
      img: "background-01-1920x750.jpg",
      captions: [
        "NO PAIN NO GAIN",
        "Having a perfect body requires a lot of training. Nice-looking body",
      ],
    },
    {
      img: "background-02-1920x750.jpg",
      captions: [
        "NEVER GIVE UP",
        "Every bodybuilder needs dedication and effort to sculpt their body, and we provide all the support you need.",
      ],
    },
    {
      img: "background-03-1920x750.jpg",
      captions: [
        "I CAN GO THE DISTANCE",
        "Our gym provides clients with the equipment and friendly support they need to achieve their top training goal.",
      ],
    },
  ];

  const plusSlides = (n) => {
    setCurrentSlide((prev) => (prev + n + slides.length) % slides.length);
  };

  const currentSlideHandler = (n) => {
    setCurrentSlide(n - 1);
  };

  const images = [
    { src: "home-01-480x480.jpg", alt: "Cinque Terre", desc: "BODY BUILDING" },
    { src: "home-02-480x480.jpg", alt: "Forest", desc: "FITNESS" },
    { src: "home-03-480x480.jpg", alt: "Northern Lights", desc: "CROSSFIT" },
    { src: "home-04-480x480.jpg", alt: "Mountains", desc: "CIRCLE STUDIO" },
  ];

  const testimonials = [
    {
      name: "John Doe",
      image: "user-july-mao-80x80.jpg",
      feedback:
        "Joining this gym has transformed my life! The trainers are incredibly supportive and the community is amazing.",
    },
    {
      name: "Mike Johnson",
      image: "home-01-480x480.jpg",
      feedback:
        "I love the variety of classes offered here. I've never felt more motivated to work out!",
    },
    {
      name: "Jane Smith",
      image: "user-alisa-milano-80x80.jpg",
      feedback:
        "The personal training sessions have helped me achieve my fitness goals faster than I ever thought possible.",
    },
  ];

  const TestimonialCard = ({ name, image, feedback }) => (
    <div className="testimonial-card" data-aos="zoom-in-up">
      <img src={image} alt={name} className="testimonial-image" />
      <h3 className="testimonial-name">{name}</h3>
      <p className="testimonial-feedback">{feedback}</p>
    </div>
  );

  const Testimonials = () => (
    <div className="testimonials-section" data-aos="fade-up">
      <h2>What Our Members Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            image={testimonial.image}
            feedback={testimonial.feedback}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* ===== Slideshow ===== */}
      <div className="slideshow-container" data-aos="fade-in">
        {slides.map((slide, index) => (
          <div
            className={`mySlides fade ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            <div className="numbertext">
              {index + 1} / {slides.length}
            </div>
            <img src={slide.img} alt={`Slide ${index + 1}`} />
            <div className="text">
              {slide.captions.map((caption, captionIndex) => (
                <div key={captionIndex} className="caption">
                  {caption}
                </div>
              ))}
            </div>
          </div>
        ))}

        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>

        <div style={{ textAlign: "center" }}>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => currentSlideHandler(index + 1)}
            ></span>
          ))}
        </div>
      </div>

      {/* ===== Welcome Section ===== */}
      <div className="welcome-container" data-aos="fade-up">
        <h1 className="welcome-title">Welcome</h1>
        <div className="red-line"></div>
        <p className="welcome-message">
          Welcome to the website Intense Gym! We hope that you will appreciate
          our services and opportunities we offer <br /> our loyal and potential
          customers. Here are some of them:
        </p>
      </div>

      {/* ===== Services Section ===== */}
      <div className="services-list">
        <div className="service-box Qualified" data-aos="fade-right">
          <h1>Qualified Coaches</h1>
          <p>
            Our coaches have years of experience in various types of fitness and
            sports.
          </p>
        </div>
        <div className="service-box Individual" data-aos="fade-up">
          <h1>Individual Approach</h1>
          <p>
            Every client of Intense has a personalized program of training and
            nutrition.
          </p>
        </div>
        <div className="service-box Modern" data-aos="fade-left">
          <h1>Modern Fitness Equipment</h1>
          <p>
            We cooperate with leading fitness equipment suppliers to give you
            the superior results.
          </p>
        </div>
      </div>

      {/* ===== Gallery Section ===== */}
      <div className="gallery-container" data-aos="zoom-in">
        {images.map((image, index) => (
          <div className="responsive" key={index}>
            <div className="gallery" data-aos="flip-up">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={image.src}
              >
                <img src={image.src} alt={image.alt} />
              </a>
              <div className="desc">{image.desc}</div>
            </div>
          </div>
        ))}
        <div className="clearfix"></div>
      </div>

      {/* ===== Testimonials Section ===== */}
      <Testimonials />
    </>
  );
};

export default Home;
