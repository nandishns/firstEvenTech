import React from "react";
import { MenuItems } from "../components/MenuItems";
import { Component } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import logo from "../assests/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { duration } from "@mui/material";
const slashMotion = {
  rest: { x: 0, opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    x: 4,
    color: "yellow",
    transition: {
      duration: 0.4,
      type: "spring",
      ease: "easeOut"
    }
  }
};
const textMotion = {
  rest: {
    x: 0
  },
  hover: {
    color: "yellow",
    //x: 6,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut"
    }
  }
};
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredIndex: null,
      count: 0,
      showMenu: false
    };
  }

  handleHover = (index) => {
    this.setState({ hoveredIndex: index });
  };

  handleMouseOut = () => {
    this.setState({ hoveredIndex: null });
  };

  handleMenuToggle = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const { showMenu } = this.state;
    const staggerDuration = 0.1;
    return (
      <>
        <div className="navbar-top">
          <motion.nav
            class="   z-40
                    font-[700]
                     
                     w-full h-10 flex flex-row
                    
                    fixed
                     
                    my-10
                    justify-center

                    navibar
                    
                 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className=" 
             
              w-[1100px]
              flex flex-row justify-between"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <Link
                className=" logo text-white  text-4xl font-extrabold "
                to="/" 
              >
              { window.innerWidth <= 600 ? (<img src={logo} style={{paddingLeft:132,width:280,marginTop:8}}   />) : (<img src={logo} style={{width:150,marginTop:10}}/>)}
              </Link>
              <ul className="navbar text-white my-2    flex w-90 flex-row  justify-between">
                {MenuItems.map((item, index) => {
                  return (
                    <li
                      className=" font-[650] w-[90px] mr-[20px] flex justify-center relative hover:text-yellow flex
                  
                    "
                      key={index}
                      onMouseOver={() => this.handleHover(index)}
                      onMouseOut={this.handleMouseOut}
                    >
                      <Link
                        className="{item.cName}  
                       
                      block hover:text-yellow-300"
                        to={item.url}
                      >
                        {item.title}
                      </Link>
                      {this.state.hoveredIndex === index && (
                        <motion.div animate={slashMotion.hover}>
                          <h2 className="text-[15px]"> {item.icon}</h2>
                        </motion.div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* <button className="bars" onClick={() => this.setState({ count: this.state.count =1 })}>
              <i class="fa-solid fa-bars"></i>
            </button> */}
              {window.innerWidth <= 600 && (
                <button className="tog bars" onClick={this.handleMenuToggle}>
                  {showMenu ? (
                    <i class="fa-solid fa-x xxsy"></i>
                  ) : (
                    <i className="fa-solid fa-bars barss"></i>
                  )}
                </button>
              )}
            </motion.div>
          </motion.nav>

          {/* Render the dropdown menu only if "bars" button is clicked */}
          {showMenu && (
            <motion.ul
              initial={{
                y: -200
              }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className="mobile-menu"
            >
              {MenuItems.map((item, index) => (
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  initial={{ opacity: 0, scale: 0.5, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.5 + index * staggerDuration }}
                  className="mobile-menu-item"
                  key={index}
                >
                  <Link
                    className="{item.cName} block hover:text-yellow-300

                    "
                    to={item.url}
                    onClick={this.handleMenuToggle}
                  >
                    {item.title} +
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
        {/* </motion.div>
        </motion.nav> */}
      </>
    );
  }
}

export default Navbar;
