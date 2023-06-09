import circle from "../assests/523.png";
import squares from "../assests/526.png";
import React, { useState } from "react";
import { useEffect } from "react";
import Banner from "../components/Banner";
import bg1 from "../assests/circle.jpg";
import Form from "../components/Form";
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

import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1
  });
  const { ref_1, inView_1 } = useInView({
    threshold: 0.1
  });
  const animation_r = useAnimation();
  const animation_l = useAnimation();
  const animation_t = useAnimation();
  const animationright = useAnimation();
  const animation_tp = useAnimation();
  const animation_tq = useAnimation();

  useEffect(() => {
    if (inView) {
      animation_t.start({
        opacity: 1
      });
      animation_r.start({
        x: 0,
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
      animation_tp.start({
        x: 200,
        opacity: 0
      });
      animation_tq.start({
        opacity: 0,
        x: -100
      });
    }
    if (inView_1) {
    }

    if (!inView_1) {
    }

    if (!inView) {
      animation_t.start({
        opacity: 0
      });

      animation_tq.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.3
        }
      });
      animation_tp.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.1
        }
      });

      animation_r.start({
        x: -100,
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
            title="Crafting the future of experiences."
            img={gal}
            subtitle="We transform physical 
            spaces to digital 
            experiences.
            
            "
          />
        </div>
        <div onMouseEnter={toggleShow} onMouseLeave={toggleShow}>
          <div ref={ref} className="section flex flex-col justify-center ">
            <div className="flex   ">
              <div className="abt-element h-[600px]  my-[70px] flex grid grid-cols-2 w-screen mx-30  justify-evenly">
                <div className="abt-img pl-[130px] pt-[50px]">
                  <motion.img animate={animation_r} src={circle} />
                </div>
                <motion.div
                  className=" 
                  text-area
                  text-left px-5 py-10  mr-30
                  "
                  animate={animation_t}
                >
                  <i class="fa-sharp fa-solid fa-plus " id="super"></i>

                  <h1 className="text-slate-50 text-[30px] text-bolder">
                    Cutting-Edge Solutions for Immersive Experiences
                    <br />
                    by Industry <strong>Experts</strong> <br />
                    <br />
                  </h1>
                  <motion.h5
                    className="
                    
                    text-slate-50 font-semibold 
                       pr-[20px]
                       "
                    animate={animation_l}
                  >
                    Our team is comprised of exceptional members in every
                    department, including design, development, and project
                    management. This allows us to deliver exquisite experiences
                    with cutting-edge solutions to our clients in a timely and
                    efficient manner. We have expertise in various fields, such
                    as experiential solutions,
                    <br />
                    +&nbsp;&nbsp; 3D & 2D Projection Mapping
                    <br />
                    +&nbsp;&nbsp; Augmented Reality
                    <br />
                    +&nbsp;&nbsp; Virtual Reality
                    <br />
                    +&nbsp;&nbsp;Hologram, and
                    <br />
                    +&nbsp;&nbsp; Robotics.
                    <br />
                    <br />
                    Our diverse skillset and experience enable us to execute
                    multiple projects simultaneously, without compromising on
                    quality.
                    <br />
                    <br />
                    We prioritize fast turnaround times without sacrificing
                    quality, allowing us to meet the tight deadlines of our
                    clients. Our commitment to delivering top-notch solutions in
                    a timely and efficient manner has earned us a reputation as
                    a reliable and trusted partner for experiential and digital
                    solutions.
                  </motion.h5>
                </motion.div>
              </div>
            </div>
          </div>

          <div ref={ref_1} className="section abc h-screen w-screen">
            <div
              className="abt-top bg-[#fff] flex
          
            h-screen
            flex
            flex-col
            justify-center
            "
            >
              <div
                // ref={ref}
                className="abt-element-2
                
                 h-[600px]
                 my-[20px] pt-[80px]  mx-20 flex grid grid-cols-2 w-screen
                    justify-evenly"
              >
                <motion.div className="text-part  pl-[100px] text-left ">
                  <i class="fa-sharp fa-solid fa-plus " id="super"></i>

                  <h1 className="text-black text-[30px] text-bolder">
                    Innovating the Future
                    <br />
                    <br />
                  </h1>
                  <motion.h5
                    animate={animation_tq}
                    className="text-black    font-semibold
                 
"
                  >
                    With offices in Bangalore and Dubai, we've been innovating
                    the future for more than a decade. Our team has delivered
                    more than 200 projects for over 50 clients across multiple
                    industries. From conceptualizing and building cutting-edge
                    applications, to crafting compelling stories through films,
                    we are passionate about using technology to create immersive
                    experiences that captivate audiences.
                    <br />
                    <br />
                    With a team of more than 20 experienced professionals, we
                    bring a wealth of expertise to every project we undertake.
                    Join us as we continue innovating and shaping the future.
                  </motion.h5>
                </motion.div>
                <div className="abt-img-2 pl-[30px]">
                  <motion.img animate={animation_tp} src={squares} />
                </div>
              </div>
            </div>
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
  );
};

export default About;
