import { React, useState } from "react";
import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import styled from "styled-components";
import "./Footer.css";
import Footer from "./Footer";
import PhoneInput from "react-phone-input-2";
import { app, db } from "../database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useInView } from "react-intersection-observer";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email) {
      const dbRef = collection(db, "contacts");

      const data = {
        name: name,
        email: email,
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
    }
  };

  return (
    <>
      <div
        className="relative bg-black block 

      flex flex-col justify-end
      
   
      "
      >
        <div
          className="
        h-[400px]
       
       "
        >
          <motion.div
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: 0, y: -100, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className=" 
           
            absolute w-full top-[280px] h-20  flex justify-center  
          "
          >
            <div
              className=" 
          
          hparent
       
         
          "
            >
              <div
                className=" 
           
                
                w-screen flex justify-center"
              >
                <h1 className="  helo text-4xl text-white font-extrabold">
                  {" "}
                  Let's start something awesome
                </h1>
              </div>

              <div
                className="filler
            
            
            "
              >
                <input
                  className="mt-[30px]
                      mr-[40px]
                      rounded-[5px] pl-[20px]
                      "
                  type="name"
                  placeholder="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  className="mt-[30px]
                      text-black
                      rounded-[5px] pl-[20px]
 "
                  type="email"
                  placeholder="Email"
                  id="emai1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <motion.button
                  className="fill
                 w-55 ml-30 text-white z-3
                 mt-[30px] 
                 "
                  whileHover={{
                    backgroundColor: "#FFFFFF",
                  }}
                  onClick={handleSubmit}
                >
                  Request a callback
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
    
      </div>
    </>
  );
};

export default Form;
