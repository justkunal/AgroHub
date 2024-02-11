import React, { useState, useEffect } from "react";
import "./profile.css";

import Profile from "../images/user-profile.png";
import ProfileImg from "../images/profile-img.png";
import Camera from "../images/camera.png";
import DashboardIcon from "../images/profile-w.png";
import ProfileIcon from "../images/dash-b.png";
import SessionIcon from "../images/session-icon.png";
import ChatbotIcon from "../images/chat-icon.png";
import CommunityIcon from "../images/community-icon.png";
import PackageIcon from "../images/package-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import Cross from "../images/cross.png";
import Downbar from "../images/downbar.png";
import LeftIcon from "../images/left-b-img.png";
import RightIcon from "../images/right-b-img.png";
import PerInfo from "../images/profile-info.png";
import Assess from "../images/profile-assess.png";
import RightCounBanner from "../images/counsellor-right-banner.png";
import LeftCounBanner from "../images/counsellor-left-banner.png";
import Navbar from "../Navbar/navbar";

const Dashboard = () => {
  const openLink = () => {
    // Replace 'your-link-here' with the desired URL
    window.open(
      "https://app-chatbot-fxvebwyjixxoh26r8q7s33.streamlit.app/",
      "_blank"
    );
  };

  const [cropType, setCropType] = useState("");
  const [fieldLocation, setFieldLocation] = useState("");
  const [plantingSchedule, setPlantingSchedule] = useState("");
  const [cropCareInstructions, setCropCareInstructions] = useState("");
  const [harvestingGuidelines, setHarvestingGuidelines] = useState("");
  const [dataCollectionRequirements, setDataCollectionRequirements] =
    useState("");
  const [reportingDeadlines, setReportingDeadlines] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [cropImages, setCropImages] = useState([]);

  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setCropImages([...cropImages, ...files]);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="dashboard1-main">
        <div className="dashboard1-left dashboard1-left-sa">
          <div className="dashboard-profile">
            <img className="farmer-pro" src={Profile} alt="Profile" />
            <div className="dash-profile-name">Martin Stanton</div>
          </div>

          <div className="admin-options">
            <div className="admin-list-dashboard">
              <a href="/dashboard" className="admin-list-cont">
                <img src={DashboardIcon} alt="Dashboard" />
                <div>Dashboard</div>
              </a>
            </div>
            <a href="/profile" className="admin-list">
              <img src={ProfileIcon} alt="Profile" />
              <div>Profile</div>
            </a>

            <div className="admin-list">
              <img src={PackageIcon} alt="Package Details" />
              <div>Package Details</div>
            </div>
          </div>
        </div>

        <div className="dashboard-right dashboard-right-mb">
          <div className="farmer-assign">
            <h2 className="assign-heading">Admin Assignments to Farmer</h2>

            <div className="assign-questions">
              <label className="assignLabel" htmlFor="cropType">
                Crop Type:
              </label>
              <input
                type="text"
                id="cropType"
                value={cropType}
                className="assignInput"
                onChange={(event) => handleInputChange(event, setCropType)}
              />

              <label className="assignLabel" htmlFor="fieldLocation">
                Field Location:
              </label>
              <input
                type="text"
                id="fieldLocation"
                value={fieldLocation}
                className="assignInput"
                onChange={(event) => handleInputChange(event, setFieldLocation)}
              />

              <label className="assignLabel" htmlFor="plantingSchedule">
                Planting Schedule:
              </label>
              <input
                type="text"
                id="plantingSchedule"
                value={plantingSchedule}
                className="assignInput"
                onChange={(event) =>
                  handleInputChange(event, setPlantingSchedule)
                }
              />

              <label className="assignLabel" htmlFor="cropCareInstructions">
                Crop Care Instructions:
              </label>
              <input
                type="text"
                id="cropCareInstructions"
                className="assignInput"
                value={cropCareInstructions}
                onChange={(event) =>
                  handleInputChange(event, setCropCareInstructions)
                }
              />

              <label className="assignLabel" htmlFor="harvestingGuidelines">
                Harvesting Guidelines:
              </label>
              <input
                type="text"
                id="harvestingGuidelines"
                className="assignInput"
                value={harvestingGuidelines}
                onChange={(event) =>
                  handleInputChange(event, setHarvestingGuidelines)
                }
              />

              <label
                className="assignLabel"
                htmlFor="dataCollectionRequirements"
              >
                Data Collection Requirements:
              </label>
              <input
                type="text"
                id="dataCollectionRequirements"
                className="assignInput"
                value={dataCollectionRequirements}
                onChange={(event) =>
                  handleInputChange(event, setDataCollectionRequirements)
                }
              />

              <label className="assignLabel" htmlFor="reportingDeadlines">
                Reporting Deadlines:
              </label>
              <input
                type="text"
                id="reportingDeadlines"
                value={reportingDeadlines}
                className="assignInput"
                onChange={(event) =>
                  handleInputChange(event, setReportingDeadlines)
                }
              />

              <label className="assignLabel" htmlFor="additionalNotes">
                Additional Notes:
              </label>
              <textarea
                id="additionalNotes"
                className="assignInput"
                value={additionalNotes}
                onChange={(event) =>
                  handleInputChange(event, setAdditionalNotes)
                }
              />

              <div className="form-group">
                <label className="assignLabel" htmlFor="cropImages">
                  Crop Images:
                </label>
                <input
                  type="file"
                  id="cropImages"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                />
              </div>
            </div>

            {cropImages.length > 0 && (
              <div className="image-preview">
                <h3>Selected Image Previews:</h3>
                <div className="image-container">
                  {cropImages.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Crop ${index + 1}`}
                      className="crop-image"
                    />
                  ))}
                </div>
              </div>
            )}

            <h3>Admin Assignments Preview:</h3>
            <p>Crop Type: {cropType}</p>
            <p>Field Location: {fieldLocation}</p>
            <p>Planting Schedule: {plantingSchedule}</p>
            <p>Crop Care Instructions: {cropCareInstructions}</p>
            <p>Harvesting Guidelines: {harvestingGuidelines}</p>
            <p>Data Collection Requirements: {dataCollectionRequirements}</p>
            <p>Reporting Deadlines: {reportingDeadlines}</p>
            <p>Additional Notes: {additionalNotes}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
