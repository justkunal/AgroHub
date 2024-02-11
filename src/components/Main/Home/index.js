import React from "react";
import "./index.css";
import doctor from "../Images/Mask_group.png";
import Footer from "../Footer";
import Navbar from "../Navbar/index";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react"; // Import useState hook if you need to manage input state
import { useEffect } from "react";
import AgroBanner from "../Images/agro-photo.jpg";
import Person from "../Images/persons.png";
import Card1 from "../Images/card11.png";
import Card2 from "../Images/card2.jpg";
import Card3 from "../Images/card3.jpg";
import Card4 from "../Images/card4.png";
import Agri1 from "../Images/agri1.jpg";
import Agri2 from "../Images/agri2.jpg";
import Agri3 from "../Images/agri3.jpg";

function Homecontent() {
  // Define state variables if needed
  const [searchQuery, setSearchQuery] = useState("");

  // Event handler for search input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any action upon form submission, such as searching
    console.log("Search query:", searchQuery);
  };

  // Effect hook for focusing input field on reset button click
  useEffect(() => {
    const resetButton = document.querySelector('.searchbox [type="reset"]');
    const inputField = resetButton.parentNode.querySelector("input");

    const focusInputField = () => {
      inputField.focus();
    };

    resetButton.addEventListener("click", focusInputField);

    return () => {
      resetButton.removeEventListener("click", focusInputField);
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <>
      <Navbar />
      <motion.div
        className="main-content"
        intial={{ width: 0 }}
        animate={{ width: "85%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      >
        <div className="main-starter">
          <div className="main-left-cont">
            <div className="left-heading-agro">We are Cella Agriculture</div>
            <div className="left-para">we believe Future of Agro is here</div>
            <div className="main-search-bar">
              <form
                noValidate
                onSubmit={handleSubmit}
                className="searchbox sbx-custom"
              >
                <div role="search" className="sbx-google__wrapper">
                  <input
                    type="search"
                    name="search"
                    placeholder="What are you looking for ?"
                    autoComplete="off"
                    required
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="sbx-custom__input"
                  />
                  <button
                    type="submit"
                    title="Submit your search query."
                    className="sbx-custom__submit"
                  >
                    <svg role="img" aria-label="Search">
                      <use xlinkHref="#sbx-icon-search-13"></use>
                    </svg>
                  </button>
                  <button
                    type="reset"
                    title="Clear the search query."
                    className="sbx-custom__reset"
                  >
                    <svg role="img" aria-label="Reset">
                      <use xlinkHref="#sbx-icon-clear-3"></use>
                    </svg>
                  </button>
                </div>
              </form>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "none" }}
              >
                <symbol
                  xmlns="http://www.w3.org/2000/svg"
                  id="sbx-icon-search-13"
                  viewBox="0 0 40 40"
                >
                  <path
                    d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
                    fillRule="evenodd"
                  />
                </symbol>
                <symbol
                  xmlns="http://www.w3.org/2000/svg"
                  id="sbx-icon-clear-3"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
                    fillRule="evenodd"
                  />
                </symbol>
              </svg>
            </div>
            <Link to="/dashboard">
              <div className="agro-community">Take a Free Assesment</div>
            </Link>
          </div>

          <div className="main-rightcont">
            <img className="agroimage" src={AgroBanner}></img>
          </div>
        </div>

        <div className="howwehelp-cont">
          <div className="howwehelp">
            <div className="agro-hwp">How We Help ?</div>
            <div className="underine-style"></div>
          </div>

          <div className="hwp-cards">
            <div className="hwp-card">
              <img className="img-edit" src={Card1}></img>
              <div className="ag-card-cont">Streamlined Data Collection</div>
            </div>
            <div className="hwp-card">
              <img src={Card2}></img>
              <div className="ag-card-cont">Improved Decision-Making</div>
            </div>
            <div className="hwp-card">
              <img src={Card3}></img>
              <div className="ag-card-cont">Enhanced Crop Monitoring</div>
            </div>
            <div className="hwp-card">
              <img className="img-edit" src={Card4}></img>
              <div className="ag-card-cont">
                Collaboration and Knowledge Sharing
              </div>
            </div>
          </div>

          <div className="agri-content">
            <div>
              AgroHub is a web-based platform developed to streamline the
              process of collecting crop data from farms across various regions.
              The platform aims to empower farmers by providing them with
              easy-to-use tools for recording and managing critical information
              about their crops, while also facilitating data-driven
              decision-making and research in agriculture.
            </div>
            <img className="agri-img" src={Agri1}></img>
          </div>

          <div className="agri-content">
            <img className="agri-img" src={Agri2}></img>
            <div>
              Traditional methods of collecting crop data are time-consuming,
              labor-intensive, and often prone to errors. Farmers face
              challenges in accurately recording and organizing data related to
              crop growth, health, and management practices. Researchers and
              agronomists struggle to access comprehensive and up-to-date data
              for analysis and study.
            </div>
          </div>

          <div className="agri-content">
            <div>
              AgroHub offers a user-friendly web interface that enables farmers
              to easily upload images, input crop cycle dates, and provide other
              relevant information about their crops directly from their fields.
              The platform allows farmers to organize their data by regions,
              crops, and other categories, making it easy to track and manage
              information.
            </div>
            <img className="agri-img" src={Agri3}></img>
          </div>
        </div>
      </motion.div>
      <div className="nothing"></div>
      <Footer />
    </>
  );
}

export default Homecontent;
