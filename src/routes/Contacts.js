import React, { useState } from "react";
import { useEffect } from "react";

import Banner from "../components/Banner";
import flag1 from "../assests/flagindia.png";

import bg1 from "../assests/finalbg.jpg";

import { Slider_left, Slider_right } from "../components/Slide";

//import PhoneInput from "react-phone-input-2";
import PhoneInput from "react-phone-input-2";
import "./index.css";
//import index from "./index.tsx";
//import TextField from "@mui/material/TextField";
//import FormControl from "@mui/material/FormControl";
//import InputLabel from "@mui/material/InputLabel";
//import FormHelperText from "@mui/material/FormHelperText";
//import { getCountries } from 'react-phone-input-2';
//import metadata from 'react-phone-input-2/lib/data';
//import { getCountries } from 'react-phone-input-2/lib/utils';
//import metadata from "libphonenumber-js/metadata.min.json";
//import PhoneInputField from "react-phone-number-input-field";
//import MuiPhoneNumber from "material-ui-phone-number";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import flag from "../assests/flag.svg";

import { motion, useAnimation } from "framer-motion";
import Particle from "../components/Particles";
import Navbar from "../components/Navbar";
import gal from "../assests/deep.jpg";
import Footer from "../components/Footer";

import { app, db } from "../database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useInView } from "react-intersection-observer";
//import Input from "./index";
const Contacts = () => {
  // const countries = getCountries();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState("");

  const handlePhoneChange = (value, country) => {
    // value is the phone number entered by the user
    // country is the selected country object
    setPhone(value);
  };
  const handleEmailChange = (value) => {
    // value is the phone number entered by the user
    // country is the selected country object
    setEmail(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && phone) {
      const dbRef = collection(db, "contacts");

      const data = {
        name: name,
        email: email,
        phone: phone
      };
      addDoc(dbRef, data)
        .then((docRef) => {
          alert("Form Submitted");

          console.log("Document has been added successfully");
        })
        .catch((error) => {
          console.log(error);
        });

      setEmail("");
      setName("");
      setPhone("");
    }
  };

  const { ref, inView } = useInView({
    threshold: 0.1
  });

  const animation_r = useAnimation();
  const animation_l = useAnimation();
  const animation_t = useAnimation();

  useEffect(() => {
    if (inView) {
      animation_t.start({
        opacity: 1
      });
      animation_r.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.3
        }
      });
      animation_l.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.5
        }
      });
    }
    if (!inView) {
      animation_t.start({
        opacity: 0
      });
      animation_r.start({
        y: 100,
        opacity: 0
      });

      animation_l.start({
        x: 100,
        opacity: 0
      });
    }

    console.log("use effect hook, inView =", inView);
  }, [inView]);

  const [show, setShow] = useState(true);
  function toggleShow() {
    setShow(!show);
  }

  return (
    <div className="w-screen">
      <MouseParallaxContainer
        globalFactorX={0.2}
        globalFactorY={0.2}
        resetOnLeave
      >
        <MouseParallaxChild>
          <Particle />
        </MouseParallaxChild>
      </MouseParallaxContainer>
      {show && <Navbar />}
      <div className="w-screen contianer">
        <div className="section ">
          {/* <Navbar /> */}

          <Banner
            title="Collaborate to Innovate"
            img={bg1}
            subtitle="Let's explore new horizons together."
          />
        </div>
        <div
          className="section "
          onMouseEnter={toggleShow}
          onMouseLeave={toggleShow}
        >
          <div
            className=" 
        mt-[0]
        h-screen
          bg-[#fff]"
          >
            <div
              className="cont-element
  
            grid grid-cols-2 pt-[40px] h-screen  mx-[80px] w-screen  "
            >
              <div ref={ref} className=" justify-evenly">
                <motion.div
                  className="
           
                  
                  cont-text-1 pl-[100px] pt-[70px]  text-left
                  "
                  animate={animation_t}
                >
                  <i class="fa-sharp fa-solid fa-plus " id="super"></i>

                  <motion.h1
                    className="text-black  text-bolder text-[30px]"
                    animate={animation_t}
                  >
                    VISIT US
                  </motion.h1>
                  <motion.h5
                    className="text-black  flex  flex-col font-semibold 
                      justify-between
                      mt-[20px]
                      
                

                      
                      "
                    animate={animation_r}
                  >
                    {" "}
                    <div>
                      <div className="flex flag">
                        <img className="h-[30px] " src={flag} />
                        <strong>United Arab Emirates</strong>
                      </div>
                      <div className="flex address">
                        <i
                          className="fa-solid fa-house  mt-[5px]"
                          id="house"
                        ></i>
                        <div className="adress">
                          Door no 43, Warehouse no 2, 18B Street, Ras al khor,
                          <br />
                          Industrial area 2, Dubai United Arab Emirates.
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flag">
                        <img
                          className="h-[19px] mt-[3px] rounded-[5px] "
                          src={flag1}
                        />
                        <strong className="ml-[4px]">India</strong>
                      </div>
                      <div className="flex address">
                        <i
                          className="fa-solid fa-house mt-[5px]"
                          id="house"
                        ></i>
                        <div className="adress">
                          First Events <br />
                          Mahatma Gandhi Road Bangalore,India
                        </div>
                      </div>
                    </div>
                  </motion.h5>
                  <motion.h5
                    className="
                      text-black  flex  flex-col font-semibold 
                      justify-between
                      mt-[10px]
                      emails
                      "
                    animate={animation_r}
                  >
                    {" "}
                    <div>
  <a href="mailto:info@firsteventech.com"  style={{color:"black"}}>
    <i class="fa-solid fa-envelope" id="email"></i>
    <strong>info@firsteventech.com</strong>
  </a>
  <br />
  <a href="tel:+971551454572"  style={{color:"black"}}>
    <i class="fa-solid fa-phone" id="phone"></i>
    <strong>+971 55 145 4572</strong>
  </a>
</div>

                   <div className="mt-[20px]">
  <a href="mailto:rakeshmahendran@firsteventech.com" style={{color:"black"}}>
    <i className="fa-solid fa-envelope" id="email"></i>
    <strong>rakeshmahendran@firsteventech.com</strong>
  </a>
  <br />
  <a href="tel:+971521122046"  style={{color:"black"}}>
    <i className="fa-solid fa-phone" id="phone"></i>
    <strong>+971 52 112 2046</strong>
  </a>
</div>

                  </motion.h5>
                </motion.div>
              </div>
              <div>
                <motion.div
                  className="cont2 
         
                  
                  pl-[100px] pt-[70px] text-left "
                  animate={animation_t}
                >
                  <i class="fa-sharp fa-solid fa-plus " id="super"></i>
                  <motion.h1
                    className="text-black  text-bolder text-[30px]"
                    animate={animation_t}
                  >
                    WRITE TO US
                  </motion.h1>
                  <motion.h5
                    className="text-black  flex  flex-col  font-semibold 
                      mt-[20px]
                      entry
                      "
                    animate={animation_r}
                  >
                    <input
                      className="mt-[30px]"
                      type="name"
                      placeholder="Name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <input
                      className="mt-[30px]
                      text-black
                      "
                      type="email"
                      placeholder="Email"
                      id="emai1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <PhoneInput
                      className="phinpt mt-[30px]"
                      specialLabel={""}
                      country={"ae"}
                      inputExtraProps={{
                        className: "custom-phone-input"
                      }}
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </motion.h5>

                  <div className="main-con xyz">
                    <motion.button
                      className="global-btn-1
                      gh
                      mt-[20px] fill text-black z-3"
                      whileHover={{
                        backgroundColor: "#000000"
                      }}
                      animate={animation_r}
                      onClick={handleSubmit}
                    >
                      SEND
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="foot">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
