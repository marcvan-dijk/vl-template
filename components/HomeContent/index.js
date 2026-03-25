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
      { y: 0, x: 0, transform: "scale(1)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);


  return (
    <div className="z-0 h-screen">
      <img
        className="w-screen h-screen object-cover home-img"
        src="/images/droneview-new.png"
        alt="Vlietlanden drone"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center h-screen home-txt">
        <div className="flex flex-col items-center justify-center flex-1">
          <h1
            ref={textOne}
            className="text-2xl tablet:text-4xl laptop:text-5xl laptopl:text-6xl p-1 font-medium tracking-wide text-white header-text"
          >
            Stichting De Vlietlanden
          </h1>
          <h2
            ref={textTwo}
            className="text-lg tablet:text-xl laptop:text-2xl laptopl:text-3xl mt-2 text-white font-extralight header-text"
          >
            Wonen tussen water en groen
          </h2>
          <Button ref={buttonOne}
            className="mt-10 text-center transition-all font-medium duration-100 ease-in text-sm rounded px-8 py-2 text-sm text-white socie-button"
            as="a"
            href="https://socie.community/app/#/login?lang=nl_nl"
          >
            Inloggen Socie
          </Button>

        </div>



      </div>
    </div>
  );
};

export default HomeContent;
