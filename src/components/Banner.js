import { react } from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import gal from "../assests/ori.jpg";
import "./Hero.css";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import { Component } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import Particle from "./Particles";
// const Banner = (props) => {
//   const { ref, inView } = useInView({
//     threshold: 0.1
//   });
//   const animation = useAnimation();
//   const animation_1 = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       animation.start({
//         x: 0,
//         opacity: 1,
//         transition: {
//           type: "spring",
//           duration: 2,
//           bounce: 0.3,
//           delay: 0.8
//         }
//       });
//       animation_1.start({
//         x: 0,
//         opacity: 1,
//         transition: {
//           type: "spring",
//           duration: 2,
//           bounce: 0.3,
//           delay: 0.5
//         }
//       });
//     }
//     if (!inView) {
//       animation.start({
//         x: -100,
//         opacity: 0
//       });

//       animation_1.start({
//         x: -100,
//         opacity: 0
//       });
//     }

//     console.log("use effect hook, inView =", inView);
//   }, [inView]);
//   return (
//     <>
//       <div
//         ref={ref}
//         className="
//            global
//            bg-black
//            h-screen
//            absolute
//            overflow-hidden

//            flex
//            justify-center

//       "
//       >
//         <MouseParallaxContainer
//           className="parallax"
//           containerStyle={{
//             width: "100%",
//             display: "grid",
//             gridTemplateColumns: "auto auto auto auto auto"
//           }}
//           globalFactorX={0.2}
//           globalFactorY={0.2}
//           resetOnLeave
//         >
//           <MouseParallaxChild
//             factorX={0.15}
//             factorY={0.15}
//           ></MouseParallaxChild>
//           <MouseParallaxChild factorX={0.15} factorY={0.15}>
//             <div className="bg-class">
//               <motion.img
//                 className="bg-image"
//                 animate={animation_1}
//                 src={props.img}
//               />
//             </div>
//           </MouseParallaxChild>
//         </MouseParallaxContainer>
//       </div>
//       <div
//         className=" heroparent absolute  w-screen h-screen
//  flex justify-center
//  align-middle

//  "
//       >
//         <motion.div
//           // mt-[-500px]
//           animate={animation}
//           className="
//          herodom-text

//           "
//         >
//           <div className="herodom-text w-[1000px]  text-left  ">
//             <div>
//               <h1 className=" text-6xl text-white  font-extrabold">
//                 {props.title}
//               </h1>
//               <h4 className="text-[18px] text-white mt-3 tracking-wider text-[#F8DE7E] ">
//                 {}
//                 <p dangerouslySetInnerHTML={{ __html: props.subtitle }}></p>
//               </h4>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default Banner;

const Banner = (props) => {
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
          className=" w-screen  flex flex-col jutify-start hchild  "
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
        </motion.div>
      </motion.div>
    </>
  );
};

export default Banner;
