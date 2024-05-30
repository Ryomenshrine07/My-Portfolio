import { AnimatePresence,motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { TransitionAnimations1 } from './TransitionAnimations';

function Contact() {
    let[isVisible,setIsVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(!isVisible)
        },2000)
    },[])
    console.log(`at start ${isVisible}`);

  return (
    <AnimatePresence mode='wait'>
    {!isVisible && <TransitionAnimations1/>}
    {console.log(`After Animation ${isVisible}`)}
    {isVisible && (<motion.div 
    className='Contact-main'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <div className="Contact-content">
        <div className="Contact-head Contact-body">
            <h1>Let's create something new!</h1>
            <h2>I'll create your projects in reasonalble price!!</h2>
            <h3>Let's get started!!</h3>
        </div>
        <div className="Contact-body">
        <form action="" className='Contact-form'>
            <input type="text" className='Contact-input' placeholder="Enter Your Name" />
            <input type="email" className='Contact-input' placeholder="Enter Your Email" />
            <textarea name="" id="" cols="30" rows="20" style={{borderRadius:'5px',backgroundColor:'transparent',border:'2px solid yellow',color:'white'}} placeholder="Give your Project Details"></textarea>
            <button className='form-button' type="submit">Submit</button>
        </form>
        </div>
        </div>
    </motion.div>)}
    </AnimatePresence>
  )
}

export default Contact