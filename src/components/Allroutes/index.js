import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Dashboard from "../User-Dash/Dashboard/dashboard";
import Dashbaord2 from "../User-Dash/Dashboard2/dashboard2";
import CounsellorDashboard from "../Counsellor-Dash/Dash-counsellor/dashboard";
import Profile from "../User-Dash/Profile/profile";
import ProfileSelfAssessment from "../User-Dash/Profile-self-assesment/profile";
import Profilecounsellor from "../Counsellor-Dash/Profile-counsellor/profile";
import Login from "../Main/Registration/Login/Login";
import Homecontent from "../Main/Home";
import SignUp from "../Main/Registration/SignUp/SignUp";
import Aboutus from "../Main/Aboutus";
import ContactUs from "../Main/Contactus";
import Counsellors from "../Main/Counsellors/Counsellors";
import { AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import axios from "axios";

export default function Allroutes() {
  const location = useLocation();
  const [session, setSession] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    p1: [],
    p2: [],
    p3: [],
    p4: [],
    p5: [],
    p6: [],
    bankDetail: {
      bank_name: "",
      ac_no: "",
      ifsc_code: "",
      branch_name: "",
      upi: "",
      card_no: "",
    },
  });

  useEffect(() => {
    const getSession = async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://back-zm-01.onrender.com/session/" + Cookies.get("data"),
        headers: {},
      };

      await axios
        .request(config)
        .then((response) => {
          setSession(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const gu = async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://back-zm-01.onrender.com/users/" + Cookies.get("data"),
        headers: {
          "Content-Type": "application/json",
        },
        //data: data,
      };

      await axios
        .request(config)
        .then((response) => {
          if (response.data.success) {
            //console.log(response.data.data);
            setUser(response.data.data);
          } else {
            //console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (Cookies.get("data") !== undefined) {
      getSession();
      gu();
    }
  }, []);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homecontent />} />
        <Route path="/home" element={<Homecontent />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/counsellors" element={<Counsellors />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path='/' element={<Dashbaord2/>}/> */}
        <Route
          path="/dashboard2"
          element={
            session?.length > 0 ? (
              <Dashbaord2 data={[session, user]} />
            ) : (
              <Dashboard data={user} />
            )
          }
        />

        <Route path="/dashboard-counsellor" element={<CounsellorDashboard />} />

        <Route path="/profile" element={<Profile />} />
        <Route
          path="/profile-self-assessment"
          element={<ProfileSelfAssessment />}
        />

        <Route path="/profile-counsellor" element={<Profilecounsellor />} />
      </Routes>
    </AnimatePresence>
  );
}
