import React, { useState } from 'react';
import {AnimatePresence, delay, motion, transform} from 'framer-motion';




function DailyUpdateCard(props) {

  return (
    <AnimatePresence mode='wait'>
    <motion.div>
        {props.card}
    </motion.div>
    </AnimatePresence>
  )
}

export default DailyUpdateCard