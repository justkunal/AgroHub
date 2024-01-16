import React from "react";
import "./index.css";
import doctor from "../Images/Mask_group.png";
import How from "../Howwehelp";
import Footer from "../Footer";
import Navbar from "../Navbar/index";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Homecontent() {
  return (
    <>
      <Navbar />
      <motion.div
        className="main-content"
        intial={{ width: 0 }}
        animate={{ width: "85%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      >
        <div className="hero">
          <img src={doctor} className="landing-image-1" />
          <Fade left>
            <div
              className="free-assessment"
              animate={{ y: 0, scale: 1, transition: { duration: 0.5 } }}
              initial={{ scale: 0 }}
            >
              <div className="choices">
                <div>Consult.</div>
                <div>Talk.</div>
                <div>Heal.</div>
              </div>
              <div className="description">
                Online Counselling therapy with top psychologists
                <br /> Anytime, Anywhere, Any device.
              </div>
              <a href="/login" style={{textDecoration: "none", color:"white"}}>
              <div className="button-free">
                
                <motion.button whileHover={{ scale: 1.1 }}>
                  Take Assessment 
                </motion.button>
                
              </div>
                    </a>
            </div>
          </Fade>
        </div>
        <How />
      </motion.div>
      <Footer />
    </>
  );
}

export default Homecontent;
