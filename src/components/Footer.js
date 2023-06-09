import { React } from "react";
import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import styled from "styled-components";
import logo from "../assests/logo.svg";

import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="
     h-[400px]
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
                <img className="hidlogo" src={logo} />
              </div>
            </a>
            <ul
              className="align-middle
          
            "
            >
              <li className="font-bold mb-[10px]">General </li>

              <li>
                <a href="/about">About</a>
              </li>

              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/contacts">Contact</a>
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
                <a href="/services">Augmented Reality</a>
              </li>
              <li>
                <a href="/services">Virtual Reality</a>
              </li>
              <li>
                <a href="/services">Holography</a>
              </li>
              <li>
                <a href="/services">Phygital</a>
              </li>
              <li>
                <a href="/services">Films</a>
              </li>
              <li>
                <a href="/services">Apps</a>
              </li>
            </ul>
            <ul>
              <li className="font-bold mb-[10px]"> Spatial </li>
              <li>
                <a href="/solutions">Brand and Customer</a>
              </li>
              <li>
                <a href="/solutions">Events</a>
              </li>
              <li>
                <a href="/solutions">Training</a>
              </li>
              <li>
                <a href="/solutions">Data Visualization</a>
              </li>
              <li>
                <a href="/solutions">Content Creation</a>
              </li>
              <li>
                <a href="/solutions">Solutions</a>
              </li>
            </ul>
            <ul className="flex mt-[10px]">
              <li>
                <a href="https://www.facebook.com/people/First-Events/100092501437594/">
                  <i className="fa-brands mr-[10px] fa-facebook fa-xl "></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@FIRSTEVENTS">
                  <i className="fa-brands  mr-[10px] fa-youtube fa-xl"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/firsteventstech">
                  <i className="fa-brands mr-[10px] fa-twitter fa-xl"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/firsteventstech/">
                  <i class="fa-brands fa-linkedin mr-[10px] fa-xl"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/firsteventech/">
                  <i class="fa-brands  fa-square-instagram  ml-[10px] fa-xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
