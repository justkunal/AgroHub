import React from "react";
import index from "./index.css";
import Abt from "../Images/about-banner.png";
import Navbar from "../Navbar/index";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import Footer from "../Footer";

function Aboutus() {
  return (
    <>
      <Navbar />
      <motion.div
        intial={{ width: 0 }}
        animate={{ width: "85%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        className="main-content"
      >
        <div className="abt-divide">
          <Fade left>
            <div className="hero">
              <img
                src={Abt}
                className="landing-image"
                style={{ borderRadius: "5px" }}
              />
            </div>
          </Fade>
          <Fade right>
            <div className="about-us-div">
              <div className="abt-us">About Us</div>
              <div className="abt-content">
                We are dedicated to revolutionizing agriculture management
                through innovative technology. Our platform offers efficient
                solutions for crop management, data collection, and
                communication, empowering farmers and researchers alike.
              </div>
            </div>
          </Fade>
        </div>

        <div className="our-miss">
          <Fade bottom>
            <div className="our-mission">Our Mission</div>
          </Fade>
          <Fade bottom>
            <div className="mission-content">
              Our mission is to empower farmers and researchers with innovative
              tools and technologies, revolutionizing agriculture management. By
              providing efficient solutions for crop management, data
              collection, and communication, we aim to drive sustainable
              practices and enhance productivity in the agricultural sector,
              ensuring a brighter future for generations to come.
            </div>
          </Fade>
        </div>
      </motion.div>
      <Footer className="footer-au"></Footer>
    </>
  );
}

export default Aboutus;
