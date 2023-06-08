import { react, useEffect } from "react";
import { Link } from "react-dom";
import Navbar from "./Navbar";
import gal from "../assests/ori.jpg";
import "./Hero.css";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Particle from "./Particles";
const Hero = (props) => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/solutions");
  const { ref, inView } = useInView({
    threshold: 0.1
  });
  const animation = useAnimation();
  const animation_1 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.8
        }
      });
      animation_1.start({
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
      animation.start({
        x: -100,
        opacity: 0
      });

      animation_1.start({
        x: -100,
        opacity: 0
      });
    }

    console.log("use effect hook, inView =", inView);
  }, [inView]);
  return (
    <>
      <div
        // ref={ref}
        className="
           global
           bg-black
           h-screen
           absolute
           overflow-hidden
           flex
           justify-center"
      >
        <MouseParallaxContainer
          className="parallax"
          containerStyle={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "auto auto auto auto auto"
          }}
          globalFactorX={0.2}
          globalFactorY={0.2}
          resetOnLeave
        >
          <MouseParallaxChild
            factorX={0.15}
            factorY={0.15}
          ></MouseParallaxChild>
          <MouseParallaxChild factorX={0.15} factorY={0.15}>
            <div className="bg-class">
              <motion.img
                className="bg-image"
                // animate={animation_1}
                src={props.img}
              />
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
      <motion.div
        className="
     hparent
    absolute flex w-screen 
   
    translate-y-3/4
    
  
    flex
    
    justify-center
    align-middle
    
    h-[320px]
    "
        ref={ref}
      >
        <motion.div
          animate={animation}
          className=" w-screen flex flex-col jutify-start hchild "
        >
          <h1
            className=" 
            
              
              text-left
              text-6xl text-white  font-extrabold
            
              "
          >
            {props.title}
          </h1>
          <h4
            className="text-[18px]
              text-left
              text-white mt-3 tracking-wider
              text-[#eedc82] "
          >
            {}

            <p dangerouslySetInnerHTML={{ __html: props.subtitle }}></p>
          </h4>
          <div className="main-con">
            <motion.button
              className=" global-btn fill text-white z-3
             
          "
              whileHover={{
                backgroundColor: "#FFFFFF"
              }}
              onClick={handleClick}
            >
              {props.btn}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
