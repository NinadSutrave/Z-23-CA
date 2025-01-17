import "./App.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Preloader from "./components/preloader/Pre";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PreLoader from "./components/preloader/preloader";
import Login from "./components/Login/login";
import LoginFirst from "./components/Login/loginFirst";
import LoginForm from "./components/Login/loginForm";
import LoginOtp from "./components/Login/fillOtp";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      {/* <PreLoader /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/signup" element={<LoginFirst />} />{" "}
          <Route path="/signup-step-3" element={<LoginForm />} />{" "}
          <Route path="/signup-step-2" element={<LoginOtp />} />{" "}
          <Route path="*" element={<Navigate to="/" />} />{" "}
        </Routes>{" "}
        <Footer />
      </div>{" "}
    </Router>
  );
}

export default App;
