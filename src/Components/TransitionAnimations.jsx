import React from 'react'
import Lottie from 'lottie-react'
import exitAnimation from './LoadingAnimation.json';

function TransitionAnimations1() {
  return (
    <Lottie className='pageLoadingTransition' animationData={exitAnimation} loop={false}/>
  )
}

export {TransitionAnimations1}