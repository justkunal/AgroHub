import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";

import Profile from "../images/user-profile.png";
import DashboardIcon from "../images/dashnboard-icon.png";
import ProfileIcon from "../images/profile-icon.png";
import PackageIcon from "../images/package-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import LeftIcon from "../images/left-b-img.png";
import RightIcon from "../images/right-b-img.png";

import Navbar from "../Navbar/navbar";
import { Link } from "react-router-dom";

const Dashboard = ({ user }) => {
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
  }, [clist]);

  return (
    <>
      <Navbar></Navbar>
      <div className="dashboard1-main">
        <div className="dashboard1-left">
          <div className="dashboard-profile">
            <img className="farmer-pro" src={Profile} alt="Profile" />
            <div className="dash-profile-name">Your Name</div>
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

        <div className="dashboard1-right dash-right-mb">
          <div className="dashboard1-right-container">
            <div className="dashboard1-right-starter">
              <div className="dashboard1-right-starter-h1">Good Morning,</div>
              <div className="dashboard1-right-starter-p">
                Monday,{" "}
                {Date().split(" ")[1] +
                  " " +
                  Date().split(" ")[2] +
                  " " +
                  Date().split(" ")[3]}
              </div>
            </div>

            <div className="assessment-banner">
              <div className="assessment-container">
                <div>
                  <img src={LeftIcon}></img>
                </div>

                <div className="corner-img-set">
                  <img className="corner-img" src={RightIcon}></img>
                  <div className="take-ass">
                    <div className="take-ass-h">
                      Harvest Better Results: Dive into Agricultural Assessment!{" "}
                    </div>
                    <Link to="/profile-self-assessment">
                      <div className="take-ass-btn">Take Assessment </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
