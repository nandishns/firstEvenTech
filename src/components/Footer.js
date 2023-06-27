import { React } from "react";
import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import styled from "styled-components";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="
     h-[300px]
     mb-[100px]
      
    
        "
      >
        <div
          className=" 
          footer-element
          
          w-screen  mx-0
          text-left 
          "
        >
          <div
            className="footer-bar flex  mx-[50px] justify-between text-white
        
          mt-[60px]
          "
          >
            <a href="/">
              <div>
                <img className="hidlogo" src={logo} style={{width:180}} />
              </div>
            </a>
            <ul
              className="align-middle
          
            "
            >
              <li className="font-bold mb-[10px]">General </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contacts">Contact</Link>
              </li>
            </ul>
            <ul>
              <li
                className="font-bold mb-[10px]
            
              "
              >
                {" "}
                Services{" "}
              </li>
              <li>
                <Link to="/services">Augmented Reality</Link>
              </li>
              <li>
                <Link to="/services">Virtual Reality</Link>
              </li>
              <li>
                <Link to="/services">Holography</Link>
              </li>
              <li>
                <Link to="/services">Phygital</Link>
              </li>
              <li>
                <Link to="/services">Films</Link>
              </li>
              <li>
                <Link to="/services">Apps</Link>
              </li>
            </ul>
            <ul>
              <li className="font-bold mb-[10px]"> Spatial </li>
              <li>
                <Link to="/solutions">Brand and Customer</Link>
              </li>
              <li>
                <Link to="/solutions">Events</Link>
              </li>
              <li>
                <Link to="/solutions">Training</Link>
              </li>
              <li>
                <Link to="/solutions">Data Visualization</Link>
              </li>
              <li>
                <Link to="/solutions">Content Creation</Link>
              </li>
              <li>
                <Link to="/solutions">Solutions</Link>
              </li>
            </ul>
<div className="socialIcons">
<ul className="flex mt-[10px] ">
              <li>
                <a href="https://www.facebook.com/people/First-Events/100092501437594/" target="_blank">
                  <i className="fa-brands mr-[10px] fa-facebook fa-xl "></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@FIRSTEVENTS" target="_blank">
                  <i className="fa-brands  mr-[10px] fa-youtube fa-xl"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/firsteventstech" target="_blank">
                  <i className="fa-brands mr-[10px] fa-twitter fa-xl"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/firsteventstech/" target="_blank">
                  <i class="fa-brands fa-linkedin mr-[10px] fa-xl"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/firsteventech/"target="_blank">
                  <i class="fa-brands  fa-square-instagram  ml-[10px] fa-xl"></i>
                </a>
              </li>
            </ul>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
