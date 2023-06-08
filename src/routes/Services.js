import Banner from "../components/Banner";
import { useState } from "react";
import vr_01 from "../assests/vr_01.jpg";
import vr_02 from "../assests/aug_real.png";
import ia_01 from "../assests/ia_01.jpg";
import proj from "../assests/projection.png";
import phyg from "../assests/phygital_exp.png";
import app from "../assests/applications.png";
import film from "../assests/films.jpg";
import Icon from "../components/Icon";
import bg1 from "../assests/circle.jpg";
import { Slider_left, Slider_right } from "../components/Slide";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Form from "../components/Form";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import Particle from "../components/Particles";

const Services = () => {
  const [show, setShow] = useState(true);
  function toggleShow() {
    setShow(!show);
  }
  return (
    <div className=" global w-screen">
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
      <div className="contianer">
        <div className="section">
          <Banner
            title="The intersection of creativity and technology"
            img={bg1}
            subtitle="Crafting digital experiences with artistry and tech"
          />
        </div>

        <div
          className="serv-element"
          onMouseEnter={toggleShow}
          onMouseLeave={toggleShow}
        >
          <div className="section h-screen w-screen">
            <Slider_left
              title="VIRTUAL REALITY<br/>
            "
              img={vr_01}
              content="
           
            <br/>
           
            We specialize in crafting compelling and realistic virtual reality content and experiences for a variety of applications. These include 
                   
            <br/>
            <br/>+&nbsp;&nbsp;Engaging events, 
            <br/>
            <br/>+&nbsp;&nbsp;Interactive brand promotions, 
            <br/>
            <br/>+&nbsp;&nbsp; Product demonstrations, 
            <br/>
            <br/>+&nbsp;&nbsp; Captivating storytelling, 
            <br/>
            <br/>+&nbsp;&nbsp; Entertaining media, 
            <br/>
            <br/>+&nbsp;&nbsp; Engaging gaming experiences, as well as 
            <br/>
            <br/>+&nbsp;&nbsp; Educational and Training programs.

           
            <br/><br/>
            Our expertise extends to creating VR content that can be accessed through a range of devices, including mobile phones, Samsung Gear VR,  Oculus Rift, Oculus Quest and Oculus Go, as well as HTC Vive and HTC Vive Pro.  We take pride in delivering top-notch immersive experiences to our clients  across various platforms.

           "
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_right
              title="AUGMENTED REALITY"
              img={vr_02}
              content="
            <br/>
            Our company leverages augmented reality as a powerful immersive tool to engage users in a variety of contexts. Whether it's augmenting content through a browser or displaying augmented content live on a stage, AR offers exciting possibilities for enhancing user experiences.
We specialize in creating augmented reality content for a range of applications, including 

<br/>
<br/>+&nbsp;&nbsp; Product demonstrations, 
<br/>
<br/>+&nbsp;&nbsp; Event engagement, 
<br/>
<br/>+&nbsp;&nbsp; Brand promotions, 
<br/>
<br/>+&nbsp;&nbsp; Immersive storytelling, 
<br/>
<br/>+&nbsp;&nbsp; Gaming, 
<br/>
<br/>+&nbsp;&nbsp; Training, and Education.

            

          
            "
            />
            {/* <br/><br/>Our team has experience delivering AR experiences across a diverse set of devices, including Microsoft Hololens, Smart Glasses, mobile phones and tablets, large LED displays, and even projections. We pride ourselves on delivering high-quality, engaging AR experiences that captivate users and help our clients achieve their goals. */}
          </div>
          <div className="section h-screen w-screen">
            <Slider_left
              title="INTERACTIVE APPLICATIONS
              "
              img={ia_01}
              content="
            <br/><br/>
            we specialize in crafting interactive applications that allow users to engage with content through a variety of modes. We create content that can be accessed through touch, gesture, motion, and voice, providing users with an immersive and engaging experience.

            <br/><br/>
            Our interactive applications take many forms, including touch tables, interactive walls, object recognition tables, and large displays controlled using iPads or other devices. Our goal is to help you tell your brand story effectively and captivate your audience with engaging, interactive experiences.
            
            <br/><br/>
            We take pride in our ability to create custom interactive applications that meet the unique needs of our clients and deliver the desired results. Whether you're looking to showcase products, educate users, or entertain audiences, we have the expertise and experience to create the perfect interactive application for you."
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_right
              title="PROJECTIONS"
              img={proj}
              content="
            <br/><br/>
            Our company specializes in using projection as a dynamic medium to deliver engaging content. Leveraging our content creation capabilities, we offer a range of projection services that can be used for a variety of applications, including mixed reality, holography, 3D projection mapping, interactive walls/floors, and immersive rooms.

            <br/><br/>
            Our team is well-versed in the latest projection technologies and techniques, allowing us to create captivating and immersive experiences that push the boundaries of what's possible. We take pride in our ability to create custom projection experiences that meet the unique needs of our clients and leave a lasting impression on their audiences.

  
            <br/><br/>
            Whether you're looking to create a unique mixed reality experience, showcase your products with holography, or create an immersive room that transports users to another world, our team has the expertise and experience to deliver a projection experience that meets your needs and exceeds your expectations.
"
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_left
              title="PHYGITAL EXPERIENCES"
              img={phyg}
              content="
              <br/><br/>
              Phygital Experiences that seamlessly integrate physical and digital spaces. These immersive experiences leverage a range of technologies, including microcontrollers, digital and analog electronics, sensors and actuators, NGC/RFID/Infrared, IoT-enabled experiences, and even brainwave (EEG) technology.

            <br/><br/>
            Our Phygital Experiences provide users with a unique and engaging way to interact with your brand and stories, allowing them to feel a deeper sense of involvement. By blending the physical and digital worlds, we create experiences that are more immersive and memorable than traditional approaches.

            <br/><br/>
            Our team can create custom Phygital Experiences to meet your unique needs and exceed expectations.


            "
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_right
              title="APPLICATIONS AND DIGITAL PRODUCTS"
              img={app}
              content="
              <br/><br/>
              At our company, we don't just build apps and websites. We craft digital experiences that will captivate your audience and leave a lasting impression.
              <br/><br/>Our team is a group of digital wizards, passionate about creating innovative products that leverage the latest technologies to achieve results that exceed expectations. Whether it's a cutting-edge web application, a sleek mobile app, or a bespoke e-commerce solution, we work closely with our clients to understand their unique needs and create digital products that are tailor-made for them. Our design and development process is carefully crafted to ensure that we create user-friendly interfaces and intuitive designs that engage and delight users, resulting in increased engagement and customer loyalty.
             <br/><br/> Our focus is on creating progressive and responsive web apps, native and hybrid mobile apps, and digital assets that provide seamless experiences across all platforms. With our team of experts, we can help you achieve your digital objectives, drive conversions, and boost your bottom line.
             
             
            <br/><br/>
        "
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_left
              title="FILMS"
              img={film}
              content="
              <br/><br/>
              For over a decade, we've been weaving magic through the lens, delivering spellbinding films that take your breath away. Our film-making prowess spans across an array of media - TV, events, web, and social platforms - to bring alive stories that ignite emotions and inspire imagination.
              <br/>
              <br/>Our arsenal of film styles comprises of live action, VFX, 2D and 3D animation, and motion design, all crafted with the perfect blend of artistry and technicality. Our team of artists and visualizers possess the superpower to create mesmerizing content for any media or device, including gaming, holographic displays, and projection mapping.
              <br/>
              <br/>We are the masters of rendering content that's optimized to captivate your audience, irrespective of the platform or device.
             

            


            "
            />
          </div>
        </div>
        <div className="section ">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Services;
