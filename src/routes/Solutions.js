import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import Particle from "../components/Particles";
import Footer from "../components/Footer";

import Banner from "../components/Banner";
import { useState } from "react";
import vr_1 from "../assests/vr_01.jpg";
import bg1 from "../assests/marbel.jpg";
import { Slider_left, Slider_right } from "../components/Slide";
import Navbar from "../components/Navbar";
import brand from "../assests/brand_eng.png";
import sust from "../assests/sustainability-01.png";
import exp from "../assests/Exp.png";

import Form from "../components/Form";
const Solutions = () => {
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
            title="Explore + Build + Delight"
            img={bg1}
            subtitle="A symphony of art, design, and technology"
          />
        </div>
        <div onMouseEnter={toggleShow} onMouseLeave={toggleShow}>
          <div className="section h-screen w-screen">
            <Slider_left
              title="Boulevard World - KSA/Riyadh
              Experiences Delivered:
              Interactive Projection Mapping for Mega Structure:<br/>
            "
              img={brand}
              content="
            <br/>
            
         
            <br/><br/>
            Boulevard World is an entertainment zone and 
            recreational complex located in Riyadh, Saudi Arabia. 
            Boulevard World aims to provide a unique experience 
            for families and individuals who enjoy traveling, 
            exploring, and playing. It showcases the rich cultural 
            diversity of various countries, with ten specially 
            designed areas representing Asia, Africa, Europe, and 
            the United States.
            
            <br/><br/>
            Boulevard World is an entertainment zone and 
recreational complex located in Riyadh, Saudi Arabia. 
Boulevard World aims to provide a unique experience 
for families and individuals who enjoy traveling, 
exploring, and playing. It showcases the rich cultural 
diversity of various countries, with ten specially 
designed areas representing Asia, Africa, Europe, and 
the United States.

            "
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_right
              title="   AYA Universe - Wafi Mall, Dubai, UAE
              Experiences Delivered:
              Audio Lighting Programming
Video Projectors Configuration
              "
              img={sust}
              content="
            <br/>
         
<strong><strong>
AYA Universe is an immersive entertainment park 
located within Wafi City Mall in Dubai, United Arab 
Emirates. This unique park combines art and 
state-of-the-art technology to create a captivating 
journey through 12 fully immersive zones. 
AYA Universe offers a range of experiences that allow 
visitors to explore different themes and engage with 
their surroundings. From creating motion and sensing 
momentum to wandering through meadows adorned 
with blooming lights and dancing with galaxies, there is 
something for everyone to enjoy
         

            "
            />

            {/*
        
         //   <strong>Experiences Delivered</strong>
          //  <br/> <br/>+&nbsp;&nbsp; Experience Center Design&nbsp;&nbsp;&nbsp;&nbsp;   +&nbsp;&nbsp; Custom Hardware
          //  <br/> <br/>+&nbsp;&nbsp; Multi Touch Table&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp; Holography
  
          //  <br/> <br/>+&nbsp;&nbsp; Augmented Reality&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +&nbsp;&nbsp; Film

          //  <br/><br/>+&nbsp;&nbsp; Interactive Wall&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp; Real Time Data Integration

          //   <br/><br/>Business Sweden‘s purpose is to help Swedish companies grow global sales and international companies invest and expand in Sweden. They partnered with the Sweden Embassy, in India, and wanted to create an interactive  space in Delhi to promote  their purpose.
         */}

            {/* We designed and delivered a state of the art interactive showroom using multiple technologies. */}
          </div>
          <div className="section h-screen w-screen">
            <Slider_left
              title="
              Expo 2020 - Dubai, UAE
Experiences Delivered:
Installation of AV Interactive Sensors
LED Screen Configurations
Audio Video Lighting - India Pavilion
               "
              img={exp}
              content="
            <br/><br/>
            Expo 2020 Dubai aimed to bring together countries from 
around the world to share ideas, showcase innovation, 
and promote collaboration.
<br/><br/>
Expo 2020 Dubai was an opportunity for countries to 
showcase their achievements, culture, and technological 
advancements through pavilions, exhibits, and cultural 
performances. The event attracted millions of visitors 
from around the world and served as a platform for 
networking, knowledge sharing, and economic growth.
<br/><br/>
The event had a significant focus on sustainability, with 
efforts made to minimize the carbon footprint and 
promote eco-friendly practices
"
            />
            {/* EXPERIENCE CENTRE- Baxter Bengaluru
            <strong>Experiences Delivered</strong>
            <br/> <br/>+&nbsp;&nbsp; MTT Table
            <br/> <br/>+&nbsp;&nbsp; Projection Mapping
            <br/> <br/>+&nbsp;&nbsp; VR Experience
            <br/><br/>+&nbsp;&nbsp; Films
           <br/><br/>Instilling confidence in a visitor while illustrating Baxter‘s larger perspective and evoking trust and inspiration through the experience. */}
            {/* An impactful narrative that is engaging for users. */}
          </div>
          <div className="section h-screen w-screen">
            <Slider_right
              title="EXPERIENCE CENTRE - RMZ Bengaluru"
              img={vr_1}
              content="
            <br/><br/>
            <strong>Experiences Delivered</strong>
            <br/> <br/>+&nbsp;&nbsp; MTT Table
            



            <br/><br/>+&nbsp;&nbsp; iPad controlled 3D
            <br/><br/>+&nbsp;&nbsp; City Tour

            <br/><br/>+&nbsp;&nbsp; Interactive Displays
            <br/><br/>A Multi−Technology Experience centre for Real Estates. "
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_left
              title="EXPERIENCE CENTRE - RMZ Bengaluru"
              img={vr_1}
              content="
            <br/><br/>
            <strong>Experiences Delivered</strong>
            <br/> <br/>+&nbsp;&nbsp; б x 4 Holobox
            <br/> <br/>+&nbsp;&nbsp; iPad controlled Sliding Displays
            <br/> <br/>+&nbsp;&nbsp; Digital Storyteller
            <br/> <br/>+&nbsp;&nbsp; Interactive Displays
            <br/><br/>
            Morph partnered with TCL  in creating experiences that can engage, interact and inform their customers and clients.
 
This touchpoint while establishing the context in depth, will instil a sense of confidence & pride
amongst the visitors along with providing a source of inspiration through the future outlook.

            "
            />
          </div>
        </div>
        <div className="section">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
