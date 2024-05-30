import React, { useEffect, useState } from 'react';
import DailyUpdateCard from './DailyUpdateCard';
import {AnimatePresence, motion} from 'framer-motion';
import Lottie from 'lottie-react';
import { TransitionAnimations1 } from './TransitionAnimations';
// import dailyUpdateAnime from './UpdatesAnimation.json';

let dailyUpdateData = [
    {
        data:<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7201260143584423937" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
    },
    {
        data:<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7201257209018683393" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
    },
    {
        data:<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7200911357771194369" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
    },
    {
        data:<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7199419094733922305" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
    },
    {
        data:(<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7199080501448486913" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>)
    },
    {
        data:(<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7198695256400224256" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>)
    },
    {
        data:(<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7197624650586099712" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>)
    },
    {
        data:(<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7197294747235831809" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>)
    },
    {
        data:(<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7196211094187614210" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>)
    },
    {
        data:(<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7196207871603187713" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>)
    },
    {
        data:(<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7195842115656949762" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>)
    },
    {
        data:<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7195435018729504768" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
    },
    {
        data:<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7193652695390384128" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
    },
    {
        data:<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7193292321495392258" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
    },
    {
        data:<iframe className='post-card' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7192209326608977920" height="400" width="404" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
    }
]


function DailyUpdates() {
    let[isVisible,setIsVisible] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setIsVisible(!isVisible);
        },2000)
    },[])
  return (
    <AnimatePresence>
    {!isVisible && <TransitionAnimations1/>}
    {isVisible && (<motion.div className='Daily-Update-Main' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <h1>Daily Updates</h1>
        <Lottie animationData={null}/>
        <div className='post-div'>
        {dailyUpdateData.map((element)=>{return(<DailyUpdateCard card={element.data}/>)})}
        </div>
    </motion.div>)}
    </AnimatePresence>
  )
}

export default DailyUpdates