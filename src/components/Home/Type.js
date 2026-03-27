import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack & Data Analytics",
          "MERN Stack Developer",
          "Google Data Analytics Certified",
          "Ex Software Developer Intern @ ReqMatch",
          "Product Management Enthusiast"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;