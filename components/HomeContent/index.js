import React, { useEffect, useState } from "react";
//import { useTheme } from "next-themes";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import { Button } from '@headlessui/react';
import { useRef } from "react";

const HomeContent = () => {
  //const { theme } = useTheme();
  const [mounted, setMounted] = useState();
  const textOne = useRef();
  const textTwo = useRef();
  const buttonOne = useRef();

  useEffect(() => {
    setMounted(true);
  }, []);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, buttonOne.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);


  return (
    <div className="z-0 h-screen">
      <img
        style={{ position: "absolute", top: "-40px", left: 0 }}
        className="w-screen h-screen object-cover"
        src="/images/droneview.png"
        alt="Vlietlanden drone"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center h-screen"
        style={{ top: "-40px" }}>
        <div className="flex flex-col items-center justify-center flex-1">
          <h1
            ref={textOne}
            className="text-3xl tablet:text-4xl laptop:text-5xl laptopl:text-6xl p-1 font-medium tracking-wide text-white text-shadow-lg/20"
          >
            Stichting De Vlietlanden
          </h1>
          <h2
            ref={textTwo}
            className="text-xl tablet:text-xl laptop:text-2xl laptopl:text-3xl mt-2 text-white font-extralight text-shadow-lg"
          >
            Een bijzondere plek aan het water
          </h2>
        </div>

        {/* <a ref={buttonOne}
          className="mb-8 font-sans font-medium text-center transition-all duration-300 ease-in text-sm  rounded-md py-2 px-4 shadow-sm hover:shadow-md hover:bg-success-strong text-white"
          href="https://socie.nl/"
          style={{ background: "#28665b" }}>Bewoners login</a> */}


        <Button ref={buttonOne}
          className="mb-8 text-center transition-all duration-100 ease-in text-sm rounded px-4 py-2 text-sm text-white socie-button"
          as="a"
          href="https://socie.community/app/#/login?lang=nl_nl"
        >
          Bewoners login
        </Button>
      </div>
    </div>
  );
};

export default HomeContent;
