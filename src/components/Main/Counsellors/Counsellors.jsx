// Counsellors.js

import React, { useState } from "react";
import "./Counsellors.css";
import Popup from "./Popup"; // Import the Popup component
import Navbar from "../Navbar";
import banner from "../assets/images/Counsellors-banner.png";
import CounsellorImg2 from "../assets/images/Counsellors-img2.png";
import CounsellorImg1 from "../assets/images/Counsellors-img-1.png";
import quote from "../assets/images/quote.png";
import star from "../assets/images/star.png";
import logo from "../assets/images/logo.png";
import footerbanner from "../assets/images/Counsellors-img3.png";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import Footer from "../Footer";

const Counsellors = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setPopupVisible(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <>
      <Navbar />
      <motion.div
        intial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        className="counsellor-container coordinator"
      >
        <div className="counsellor-banner">
          <img
            className="counsellor-banner-img counsellor-banner-img-cou"
            src={banner}
            alt="Counsellor Banner"
          />
          <motion.div
            animate={{ y: 0, scale: 1, transition: { duration: 0.5 } }}
            initial={{ scale: 0 }}
            className="counsellor-register"
          >
            <div className="counsellor-heading">
              <h3>Coordinators</h3>
              <p>
                Grow your coordinating practice from the comfort of your home at
                zero operating cost.
              </p>
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="counsellor-btn"
                onClick={openPopup}
              >
                Register For Free
              </motion.button>
            </div>
          </motion.div>
        </div>
        <Fade bottom>
          <div className="free-assessment-mb">
            <div className="free-assessment-mb-1">Coordinators</div>
            <div className="free-assessment-mb-2 free-assessment-mb-2-u">
              Grow your coordinating practice from the comfort of your home at
              zero operating cost.
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="counsellor-btn"
                onClick={openPopup}
              >
                Register For Free
              </motion.button>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="counsellor-middle">
            <div className="counsellor-middle-heading">
              <h1>What We Can Offer?</h1>

              <div className="counsellor-line"></div>
            </div>
            <p>
              As an Coordinator, our platform offers streamlined agricultural
              management tools. Assign crop types, field locations, and
              schedules effortlessly. Access harvesting guidelines and best
              practices for optimal yield. Define data collection requirements
              and reporting deadlines easily. Customize assignments for specific
              needs. Foster seamless communication with built-in messaging.
              Capture visual insights with image uploads. Ensure data security
              and integrity. Revolutionize agriculture management with our
              platform's efficiency and sustainability focus. Join us today to
              transform agricultural operations for a brighter future.
            </p>
          </div>
        </Fade>

        <div className="counsellor-comp">
          <Fade bottom>
            <div className="counsellor-middle-heading-1">
              <h1>Our Work Culture</h1>
              <div className="counsellor-line"></div>
            </div>
          </Fade>
          <div className="counsellor-culture-container">
            <Fade left>
              <div className="counsellor-content">
                <div className="content-left-1">
                  <h3>Safe To Work</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod emporincididunt ut labore et dolore magna aliqua
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod emporincididunt
                    ut labore{" "}
                  </p>
                </div>
                <div className="content-right-1">
                  <img src={CounsellorImg2}></img>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="counsellor-content">
                <div className="content-left-2">
                  <img src={CounsellorImg1}></img>
                </div>
                <div className="content-right-2">
                  <h3>Friendly Environment</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod emporincididunt ut labore et dolore magna aliqua
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod emporincididunt
                    ut labore{" "}
                  </p>
                </div>
              </div>
            </Fade>
          </div>

          <div className="counsellor-testimonies">
            <Fade bottom>
              <div className="counsellor-testimonies-heading">
                <h1>Testimonies</h1>
                <div className="test-line"></div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="testimonies-card-container">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="testimonies-card"
                >
                  <img src={quote}></img>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ad ipiscing elit,
                    sed do eiusmod tempor incidi dunt ut labore et dolore magna
                    aliqua.pisci ng elit, sed do eiusmod tempor incididuntdg ut
                    labore et dolore magna aliqua.
                  </p>
                  <div className="counsellor-review">
                    <p>User Name, Mumbai</p>
                    <img src={star}></img>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="testimonies-card"
                >
                  <img src={quote}></img>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ad ipiscing elit,
                    sed do eiusmod tempor incidi dunt ut labore et dolore magna
                    aliqua.pisci ng elit, sed do eiusmod tempor incididuntdg ut
                    labore et dolore magna aliqua.
                  </p>
                  <div className="counsellor-review">
                    <p>User Name, Mumbai</p>
                    <img src={star}></img>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="testimonies-card"
                >
                  <img src={quote}></img>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ad ipiscing elit,
                    sed do eiusmod tempor incidi dunt ut labore et dolore magna
                    aliqua.pisci ng elit, sed do eiusmod tempor incididuntdg ut
                    labore et dolore magna aliqua.
                  </p>
                  <div className="counsellor-review">
                    <p>User Name, Mumbai</p>
                    <img src={star}></img>
                  </div>
                </motion.div>
              </div>
            </Fade>
          </div>
        </div>
      </motion.div>
      {/* Render the Popup component if isPopupVisible is true */}
      {isPopupVisible && <Popup onClose={closePopup} />}
      <Footer />
    </>
  );
};

export default Counsellors;
