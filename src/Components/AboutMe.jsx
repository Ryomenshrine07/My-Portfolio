import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';
import { TransitionAnimations1 } from './TransitionAnimations';

const AboutMe = () => {
    let[isVisible,setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(!isVisible); // 3 second ke baad mera page visible karo
        //   console.log("Set timout ke andar "+isVisible);  // Until then the value if isVisible will be false
        //   console.log('in Here');
        }, 2000); // Adjust the delay to match TransitionAnimations1 duration
        return () => clearTimeout(timer); // Cleanup the timer on component unmount
      }, []);

    const text = "Hi, I'm Vinayak Upadhyay, a passionate MERN stack developer with extensive knowledge in C, Java, C++, and Python. I enjoy building scalable web applications and always strive to keep myself updated with the latest technologies. When I'm not coding, you can find me exploring new tech trends, contributing to open source, or working on personal projects. My journey in the tech world started with a curiosity for how things work, leading me to dive deep into various programming languages and frameworks. Each project I undertake is a learning opportunity and a chance to innovate. Let's connect and build something amazing together!".split(" ");
    return (
        <AnimatePresence>
        {!isVisible && <TransitionAnimations1/>}
        {isVisible && (<motion.div 
        className="about-me-container"
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        exit={{opacity:0}}>
            <div className="content">
                <h1>About Me</h1>
                {text.map((el, i) => (
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 0.25,delay: i / 10,}} key={i}>
          {el}{" "}
        </motion.span>
      ))}
            </div>
            <footer className="footer">
                <a href="https://www.instagram.com/vinayakupadhyay07?igsh=b3BpamtkZGFsdnZo" target="_blank" rel="noopener noreferrer" className="social-link instagram">Instagram</a>
                <a href="https://www.linkedin.com/in/vinayak-upadhyay-850914274" target="_blank" rel="noopener noreferrer" className="social-link linkedin">LinkedIn</a>
            </footer>
        </motion.div>)}
        </AnimatePresence>
    );
};

export default AboutMe;
