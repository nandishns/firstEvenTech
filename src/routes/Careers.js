import React, { useState } from "react";
import { useEffect } from "react";

import Banner from "../components/Banner";
import bg1 from "../assests/circle.jpg";

import { Slider_left, Slider_right } from "../components/Slide";

import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

import { motion, useAnimation } from "framer-motion";
import Particle from "../components/Particles";
import Navbar from "../components/Navbar";
import gal from "../assests/smoke.jpg";
import Footer from "../components/Footer";
import Form from "../components/Form";

import { useInView } from "react-intersection-observer";

const Contacts = () => {
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
      <div className="contianer w-screen">
        <div className="section w-screen ">
          <Banner
            title="Step into the Future.
            "
            img={gal}
            subtitle="Together, Let's Bring Bold Ideas to Life            "
          />
        </div>
        <div
          className="section"
          onMouseEnter={toggleShow}
          onMouseLeave={toggleShow}
        >
          <div
            ref={ref}
            className="h-[570px]
            
              flex
              flex-col
              justify-center


               bg-white  "
          >
            <div
              className="car-element
           
           
           flex grid grid-cols-2 w-screen justify-evenly"
            >
              <h1
                className="text-black text-bolder pl-[180px] pt-[40px] text-left text-[30px] tracking-wider"
                animate={animation_t}
              >
                <i class="fa-sharp fa-solid fa-plus " id="super"></i>
                Join us
              </h1>
              <motion.div>
                <motion.h5
                  className="text-black 
            
                  font-semibold text-left tracking-wider "
                  animate={animation_r}
                >
                  If you are someone who loves to innovate and wants to be part
                  of a team that's always looking to push the limits, then we
                  want to hear from you.
                  <br />
                  <br />
                  We believe in providing a nurturing environment where our
                  employees can thrive and grow, both personally and
                  professionally. Join us on this exciting journey and explore
                  your full potential with us
                </motion.h5>
              </motion.div>
            </div>
          </div>
          <div className="section">
            <Form />
            <div className="foot">
            <Footer />
          </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Contacts;
