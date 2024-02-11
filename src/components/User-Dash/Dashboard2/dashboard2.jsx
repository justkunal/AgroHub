import React, { useEffect, useState } from "react";
import "./dashboard2.css";

import Profile from "../images/user-profile.png";
import DashboardIcon from "../images/dashnboard-icon.png";
import ProfileIcon from "../images/profile-icon.png";
import SessionIcon from "../images/session-icon.png";
import ChatbotIcon from "../images/chat-icon.png";
import CommunityIcon from "../images/community-icon.png";
import PackageIcon from "../images/package-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import BrainIcon from "../images/brain.png";
import BrainIcon2 from "../images/brain2.png";
import BrainIcon3 from "../images/brain3.png";
import DownbarIcon from "../images/downbar.png";
import Counsellor1 from "../images/counsellor1.png";
import Counsellor2 from "../images/counsellor2.png";
// import Counsellor2 from "../images/counsellor2.png";
import timeIcon from "../images/time.png";
import Minicalender from "../images/minicalender.png";
import CancelIcon from "../images/cancel.png";
import CalenderIcon from "../images/calender.png";
import UpcomingIcon from "../images/upcoming-icon.png";
import ZenchatIcon from "../images/zenchat.png";
import LeftIcon from "../images/left-b-img.png";
import RightIcon from "../images/right-b-img.png";
import RightCounBanner from "../images/counsellor-right-banner.png";
import LeftCounBanner from "../images/counsellor-left-banner.png";
import Navbar from "../Navbar/navbar";
import axios from "axios";

const Dashboard2 = ({ data }) => {
  const [sessions, getSessions] = useState(data[0]);
  const [clist, setClist] = useState([]);

  useEffect(() => {
    const getClist = async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://back-zm-01.onrender.com/doc/",
        headers: {},
      };

      axios
        .request(config)
        .then((response) => {
          // console.log(response.data.data)
          setClist(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getClist();
  }, []);

  const name = (id) => {
    const n = clist.find((item) => item._id === id);
    console.log(n);
    if (!n) return "unkown";
    return n.name;
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

  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="dashboard-main">
        <div className="dashboard2-left dashboard2-left-d">
          <div className="dashboard-profile">
            <img src={Profile} alt="Profile" />
            <div className="dash-profile-name">Your Name</div>
          </div>

          <div className="admin-options">
            <div className="admin-list-dashboard">
              <a href="/dashboard2" className="admin-list-cont">
                <img src={DashboardIcon} alt="Dashboard" />
                <div>Dashboard</div>
              </a>
            </div>
            <a href="/profile" className="admin-list">
              <img src={ProfileIcon} alt="Profile" />
              <div>Profile</div>
            </a>
            <a href="/session" className="admin-list">
              <img src={SessionIcon} alt="Session" />
              <div>Session</div>
            </a>
            <a href="/chat" className="admin-list">
              <img src={ChatbotIcon} alt="Chatbot" />
              <div>Chatbot</div>
            </a>
            <a href="/community" className="admin-list">
              <img src={CommunityIcon} alt="Community" />
              <div>Community</div>
            </a>
            <a className="admin-list">
              <img src={PackageIcon} alt="Package Details" />
              <div>Package Details</div>
            </a>
            <a href="/payment-history" className="admin-list">
              <img src={PaymentIcon} alt="Payment History" />
              <div>Payment History</div>
            </a>
          </div>
        </div>

        <div className="dashboard-right dashboard-right-mb">
          <div>
            <h2>Admin Assignments to Farmer</h2>

            <label htmlFor="cropType">Crop Type:</label>
            <input
              type="text"
              id="cropType"
              value={cropType}
              onChange={(event) => handleInputChange(event, setCropType)}
            />

            <label htmlFor="fieldLocation">Field Location:</label>
            <input
              type="text"
              id="fieldLocation"
              value={fieldLocation}
              onChange={(event) => handleInputChange(event, setFieldLocation)}
            />

            <label htmlFor="plantingSchedule">Planting Schedule:</label>
            <input
              type="text"
              id="plantingSchedule"
              value={plantingSchedule}
              onChange={(event) =>
                handleInputChange(event, setPlantingSchedule)
              }
            />

            <label htmlFor="cropCareInstructions">
              Crop Care Instructions:
            </label>
            <input
              type="text"
              id="cropCareInstructions"
              value={cropCareInstructions}
              onChange={(event) =>
                handleInputChange(event, setCropCareInstructions)
              }
            />

            <label htmlFor="harvestingGuidelines">Harvesting Guidelines:</label>
            <input
              type="text"
              id="harvestingGuidelines"
              value={harvestingGuidelines}
              onChange={(event) =>
                handleInputChange(event, setHarvestingGuidelines)
              }
            />

            <label htmlFor="dataCollectionRequirements">
              Data Collection Requirements:
            </label>
            <input
              type="text"
              id="dataCollectionRequirements"
              value={dataCollectionRequirements}
              onChange={(event) =>
                handleInputChange(event, setDataCollectionRequirements)
              }
            />

            <label htmlFor="reportingDeadlines">Reporting Deadlines:</label>
            <input
              type="text"
              id="reportingDeadlines"
              value={reportingDeadlines}
              onChange={(event) =>
                handleInputChange(event, setReportingDeadlines)
              }
            />

            <label htmlFor="additionalNotes">Additional Notes:</label>
            <textarea
              id="additionalNotes"
              value={additionalNotes}
              onChange={(event) => handleInputChange(event, setAdditionalNotes)}
            />

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

export default Dashboard2;
