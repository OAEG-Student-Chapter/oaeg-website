'use client';
import React from "react";
import Lottie from 'react-lottie';
import * as animationData from './anim-coming-soon.json'

export default function Home() {
  return (
    <div className="min-h-screen bg-white h-screen flex flex-col justify-center items-center">
        <Lottie options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
         height={"100vw"}/>
    </div>
  );
}
