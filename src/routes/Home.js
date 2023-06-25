import { React, Component, useEffect, useRef } from "react";
import Hero from "../components/Hero";
import Particle from "../components/Particles";

import gal from "../assests/ori.jpg";
import Form from "../components/Form";
import { motion } from "framer-motion";

//import Herodom from "../components/Herodom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

import bg1 from "../assests/ocean.jpg";
import bg2 from "../assests/fluid.png";
import bg3 from "../assests/1080.jpg";
import bg4 from "../assests/smoke.jpg";
import ReactPlayer from "react-player";
import bgVideo from "../assests/homePageVideo.mp4";

export default class Home extends Component {
  render() {
    return (
      <div className=" global w-screen ">
        <MouseParallaxContainer
          globalFactorX={0.2}
          globalFactorY={0.2}
          resetOnLeave
        >
          <MouseParallaxChild>
            <Particle />
          </MouseParallaxChild>
        </MouseParallaxContainer>
        <Navbar />
        <div className="contianer">
          <div className="section">
            <ReactPlayer
              controls={true}
              width="100%"
              height="100%"
              // url="https://vimeo.com/832762249?share=copy"
              url={bgVideo}
              loop={true}
              controls={false}
              playing={true}
              muted
              config={{
                vimeo: {
                  playerOptions: { autoplay: true }
                }
              }}
            />
          </div>

          <div className="section">
            <Hero
              title="Creativity + Innovation + Impact"
              img={bg1}
              subtitle="We harness the power of creativity and innovation to make a meaningful impact on the world around us, delivering bespoke solutions that drive results."
              btn="VIEW OUR SOLUTIONS"
            />
          </div>

          <div className="section h-[1000px]">
            <Hero
              title="Vision + Ingenuity + Expertise "
              img={bg2}
              subtitle="At our core, we are a team of innovators, driven by a vision to transform businesses through technology and design. With a focus on ingenuity and expertise, we create solutions that are tailored to meet the evolving needs of our clients, and help them stay ahead of the curve."
              btn="VIEW OUR SOLUTIONS"
            />
            {/* <Footer /> */}
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
  }
}
