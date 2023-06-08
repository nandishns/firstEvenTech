import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import { Slideleft, Slideright } from "./Slider";
import Particle from "../components/Particles";
import Footer from "../components/Footer";

import Banner from "../components/Banner";
import { useState } from "react";
import vr_1 from "../assests/vr_01.jpg";
import bg1 from "../assests/marbel.jpg";

import Navbar from "../components/Navbar";
import brand from "../assests/brand_eng.png";
import sust from "../assests/sustainability-01.png";
import exp from "../assests/Exp.png";

const Dummy = () => {
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
            title="Research + Process + Experience"
            img={bg1}
            subtitle=""
          />
        </div>
        <div onMouseEnter={toggleShow} onMouseLeave={toggleShow}>
          <div className="section h-screen w-screen">
            <Slideleft
              title="BRAND EXPERIENCE TOUR - WIPRO/Bangalore<br/>
            "
              img={brand}
              content="
            <br/>
            
            <strong>Experiences Delivered</strong>
            <br/>
            <br/>+&nbsp;&nbsp; Interactive Projection<br/>
             <br/>    +&nbsp;&nbsp; Virtual Reality<br/>
            <br/>   +&nbsp;&nbsp; Content Design<br/>
            <br/><br/>
            Wipro limited is a leading global information technology, consulting and business process
            services company, headquartered in Bengaluru, India. They changed their brand identity after 19
            years.
            <br/><br/>
            To drive in the new identity to their employees,they approached us to create a tour across
             their campuses where employees could interactive with projection and VR to understand the new 
             direction the company is taking.

            "
            />
          </div>
          <div className="section h-screen w-screen">
            <Slideright
              title="SUSTAINABILITY BY SWEDEN SHOWROOM IN INDIA- Business Sweden Delhi"
              img={sust}
              content="
            <br/>
            <strong>Experiences Delivered</strong>
           <br/> <br/>+&nbsp;&nbsp; Experience Center Design&nbsp;&nbsp;&nbsp;&nbsp;   +&nbsp;&nbsp; Custom Hardware
           <br/> <br/>+&nbsp;&nbsp; Multi Touch Table&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp; Holography
  
           <br/> <br/>+&nbsp;&nbsp; Augmented Reality&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +&nbsp;&nbsp; Film

           <br/><br/>+&nbsp;&nbsp; Interactive Wall&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp; Real Time Data Integration

            <br/><br/>Business Sweden‘s purpose is to help Swedish companies grow global sales and international companies invest and expand in Sweden. They partnered with the Sweden Embassy, in India, and wanted to create an interactive  space in Delhi to promote  their purpose.
            

            "
            />

            {/* We designed and delivered a state of the art interactive showroom using multiple technologies. */}
          </div>
          <div className="section h-screen w-screen">
            <Slideleft
              title="EXPERIENCE CENTRE- Baxter Bengaluru "
              img={exp}
              content="
            <br/><br/>
            <strong>Experiences Delivered</strong>
            <br/> <br/>+&nbsp;&nbsp; MTT Table
            <br/> <br/>+&nbsp;&nbsp; Projection Mapping
            <br/> <br/>+&nbsp;&nbsp; VR Experience
            <br/><br/>+&nbsp;&nbsp; Films
           <br/><br/>Instilling confidence in a visitor while illustrating Baxter‘s larger perspective and evoking trust and inspiration through the experience.
             An impactful narrative that is engaging for users."
            />
          </div>
          <div className="section h-screen w-screen">
            <Slideright
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
            <Slideleft
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
          <div className=" ">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dummy;
