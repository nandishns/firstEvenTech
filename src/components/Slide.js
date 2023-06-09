import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/fontawesome-free-solid";

import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

const Slider_left = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.1
  });

  const animation_r = useAnimation();
  const animation_l = useAnimation();
  const animation_t = useAnimation();
  const animation_bt = useAnimation();

  useEffect(() => {
    if (inView) {
      animation_t.start({
        opacity: 1,
        transition: {
          delay: 0.4
        }
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
      animation_bt.start({
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
        x: 100,
        opacity: 0
      });
      animation_bt.start({
        y: 30,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.3
        }
      });
      animation_l.start({
        x: -100,
        opacity: 0
      });
    }

    console.log("use effect hook, inView =", inView);
  }, [inView]);

  return (
    <>
      <div>
        <div
          className=" h-screen  flex flex-col justify-center align-middle"
          ref={ref}
        >
          <div
            // style={{
            //   display: "grid",
            //   gridTemplateColumns: "1fr 1fr",
            //   margin: "0px 0px",
            //   border: "solid 5px red"
            // }}
            className="
            slide-con 
   
            w-screen
             
            flex grid grid-cols-2   "
          >
            <motion.div animate={animation_l} className=" flex justify-center ">
              <MouseParallaxContainer
                globalFactorX={0.1}
                globalFactorY={0.1}
                resetOnLeave
              >
                <MouseParallaxChild>
                  <img
                    className="
                  slider-img
                   h-[500px]
                  
                   
                  "
                    src={props.img}
                  />
                </MouseParallaxChild>
              </MouseParallaxContainer>
            </motion.div>

            <motion.div
              className=" slide-text 
              flex flex-col align-midlle justify-center
              px-[60px]  font-[900] text-white    text-left  "
              animate={animation_t}
            >
              <h1 className="  text-slate-50 text-[25px] font-[900]">
                <i class="fa-sharp fa-solid fa-plus " id="plus">
                  {" "}
                </i>

                <h1
                  className=" tracking-wider font-black"
                  dangerouslySetInnerHTML={{ __html: props.title }}
                ></h1>
                <img className="  slider-img-1" src={props.img} />
              </h1>

              <motion.h5
                className="text-slate-50 font-medium
                 pr-[60px]
                 slide-small-text 
                "
                animate={animation_bt}
              >
                <p
                  className="tracking-wider"
                  dangerouslySetInnerHTML={{ __html: props.content }}
                ></p>
              </motion.h5>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

const Slider_right = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.1
  });

  const animation_r = useAnimation();
  const animation_l = useAnimation();
  const animation_t = useAnimation();
  const animation_bt = useAnimation();

  useEffect(() => {
    if (inView) {
      animation_t.start({
        opacity: 1,
        transition: {
          delay: 0.4
        }
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
      animation_bt.start({
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
        x: 100,
        opacity: 0
      });
      animation_bt.start({
        y: 30,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.3
        }
      });
      animation_l.start({
        x: -100,
        opacity: 0
      });
    }

    console.log("use effect hook, inView =", inView);
  }, [inView]);

  return (
    <>
      <div>
        <div
          className="
          h-screen flex flex-col
         
          justify-center align-middle"
          ref={ref}
        >
          <div
            className="
            slide-con 
         
           
            w-screen
             
            flex grid grid-cols-2 
            
            "
          >
            <motion.div
              className=" slide-text
              righttext 
              flex 
              flex-col
            
              justify-center
                       
             
              font-[900] text-white text-left 
              pl-[260px]
            
              "
              animate={animation_t}
            >
              <div>
                <h1 className="text-slate-50 text-[25px] font-black">
                  <i class="fa-sharp fa-solid fa-plus " id="plus">
                    {" "}
                  </i>

                  <h1
                    className=" font-[900] tracking-wider"
                    dangerouslySetInnerHTML={{ __html: props.title }}
                  ></h1>

                  <img className="slider-img-1" src={props.img} />
                </h1>

                <motion.h5
                  className="
            
                slide-small-text text-slate-50 font-medium "
                  animate={animation_bt}
                >
                  <p
                    className="tracking-wider"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                  ></p>
                </motion.h5>
              </div>
            </motion.div>

            <motion.div
              animate={animation_r}
              className="   flex  justify-center "
            >
              <MouseParallaxContainer
                globalFactorX={0.1}
                globalFactorY={0.1}
                resetOnLeave
              >
                <MouseParallaxChild>
                  <img
                    className="
                    slider-img
                   
                    h-[500px]
                    "
                    src={props.img}
                  />
                </MouseParallaxChild>
              </MouseParallaxContainer>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Slider_left, Slider_right };
