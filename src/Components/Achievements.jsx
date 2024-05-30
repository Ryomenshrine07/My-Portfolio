import React, { useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion';
import AchievementsCard from './AchievementsCard';
import { TransitionAnimations1 } from './TransitionAnimations';

let achieveData = [
  {
    img: require('E:/Web Developement/my_portfolio/src/Images/css certificate.png'),
    languageName:'In CSS',
    certifiedBy:'HackerRank'
  },
  {
    img: require('E:/Web Developement/my_portfolio/src/Images/java_basic certificate.png'),
    languageName:'In Java',
    certifiedBy:'HackerRank'
  },
  {
    img: require('E:/Web Developement/my_portfolio/src/Images/Programming In Java.png'),
    languageName:'In Java',
    certifiedBy:'NPTEL'
  },
  {
    img: require('E:/Web Developement/my_portfolio/src/Images/problem_solving_basic certificate.png'),
    languageName:'Java and C++',
    certifiedBy:'HackerRank'
  },
  {
    img: require('E:/Web Developement/my_portfolio/src/Images/javascript_basic certificate.png'),
    languageName:'JavaScript',
    certifiedBy:'HackerRank'
  }
];




function Achievements() {
  let [isVisible, setIsVisible] = useState(false);
  return (
    <AnimatePresence mode='wait'>
      {!isVisible && <TransitionAnimations1/>}
      {isVisible || (
        <motion.div
          className='Achievements-main'
          transition={{ duration: 2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onAnimationComplete={() => setIsVisible(!isVisible)}
        >
          <div className='Achievements-header'>
            <h1 style={{position:'relative'}} >My Achievements</h1>
          </div>
          <div className='Achievements-body'>
            {achieveData.map((data) => (<AchievementsCard key={data.languageName} image={data.img} language={data.languageName} certify={data.certifiedBy}/>))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Achievements