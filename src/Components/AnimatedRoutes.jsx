import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import { AnimatePresence } from 'framer-motion';
import Achievements from './Achievements';
import AboutMe from './AboutMe';
import Contact from './Contact';
import DailyUpdates from './DailyUpdates';


function AnimatedRoutes() {
    const location = useLocation();
    return (
        <div>
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/achievements' element={<Achievements/>} />
                    <Route path='/aboutme'  element={<AboutMe/>}/>
                    <Route path='/analytics' />
                    <Route path='/dailyupdates' element={<DailyUpdates/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes;
// For Framer-motion to word you need to pass the location of the current navigated component
// in location={} attribute and you need to define the path of your component by passing the
// path name of your component in key={} attribute.

// Now all of this attribute passing should be done on Routes tag (Because it contains all route)

// Now import AnimatePresence object from Framer-motion library and wrap-up whole Routes tag with this 
// AnimatePresence tag (As you want to animate all of the Route present in Routes tag).

// Now After wrapping up your Routes tag with AnimatePresence you are ready to apply Framer-motion 
// on your compotnents during rendering

// Simply go to Every Component on which you want to apply Framer-motion library effects
// and import motion object from Framer-motion library.