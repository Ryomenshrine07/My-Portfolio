import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion';
import { TransitionAnimations1 } from './TransitionAnimations';


function Home() {
  let[isVisible,setIsVisible] = useState(false); 
  useEffect(()=>{
    setTimeout(()=>{
      setIsVisible(!isVisible)
    },2000)
  },[])
  return (
    <AnimatePresence>
    {!isVisible && <TransitionAnimations1/>}
    {isVisible && (<motion.div className='Home' 
    transition={{duration:1}} 
    initial={{opacity:0}} 
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <div className='home-pop-up-text'>
        <div className='name-identy'>
            <h1>Hello Everyone!</h1>
            <h3>I am Vinayak Upadhyay</h3>
        </div>
        <div className='domain-wel'>
            <h1>Welcome....</h1>
            <h3 id='runningText'>To my domain</h3>
        </div>
        </div>
        <div className='promo-div'>
        <motion.div whileTap={{ scale: 0.2 }} className='instagram-promo promo-class'>
        <img width={'50px'} src={require('E:/Web Developement/my_portfolio/src/Images/instagram_icon.png')} alt="" />
        <h3>Instagram : vupadhyay07</h3>
        </motion.div>
        <motion.div whileTap={{ scale: 0.2 }} className='linkedin-promo promo-class'>
        <img width={'50px'} src={require('E:/Web Developement/my_portfolio/src/Images/linkedin_icon.png')} alt="" />
        <h3>Linkedin : www.linkedin.com/in/vinayak-upadhyay-850914274</h3>
        </motion.div>
        </div>
        <img id='Home-body-image' src={require('E:/Web Developement/my_portfolio/src/Images/MyImage.png')} alt="" />
    </motion.div>)}
    </AnimatePresence>
  )
}
export default Home;

// [For framer-motion]---->

// Define your main div of your compoenent as motion.div.

// Now Apply attributes : initial={} , animate={} , exit={}.
// initial={} attribute define the initial state of your framer-motion animation.
// animate={}