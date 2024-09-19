import React from 'react';
import "./styles.css";

import Button from "../../Common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import {motion} from "framer-motion";

import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";
const MainComponent = () => {
  return (
    <div className='flex-info'>
      <div className='left-component'>
        <motion.h1 initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:0.5}} 
        className='track-crypto-heading'>Track Crypto</motion.h1>
        <motion.h1 initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.5}}
        className='real-time-heading' 
        >Real Time.</motion.h1>
        <motion.p initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:1}}
        className='info-text'>Want to track crypto in real time? .Visit the dashboard to do so</motion.p>
        <motion.div initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:1.5}}
        className='btn-flex'>
          <a href='/dashboard'>
          <Button text={"Dashboard"}/></a>
          <RWebShare
            data={{
              text: "CryptoDashboard made by Avi Vashishta using React JS.",
              url: "https://crypto-dashboard-jan.netlify.app",
              title: "CryptoTracker.",
            }}
            onClick={() => toast.info("App Shared!")}
          >
            <Button text={"Share App"} outlined={true} /></RWebShare>
        </motion.div>
      </div>
      <div className='phone-container'>
        <motion.img src={iphone} className='iphone'
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}/>
        <img src={gradient} alt="Description of the image" className='gradient'/>
      </div>
    </div>
  )
}

export default MainComponent;
