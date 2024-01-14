import React from "react";
import Image from "next/image";
import logo from "./Logo_OAEG.png";

export default function Home() {
  return (
    <div className="min-h-scree h-screen flex justify-center items-center">
      <Image src={logo} height={300} width={300} alt="OAEG Logo"/>
      {/* Creative text to show before the launch of the website */}

    </div>
  );
}
