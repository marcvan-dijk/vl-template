import { useRef } from "react";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import AboutContent from "../components/AboutContent";
import ContactContent from "../components/ContactContent";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const aboutRef = useRef();
  const contactRef = useRef();
  const [mounted, setMounted] = useState();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handling Scroll
  const handleHomeScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [aboutRef.current, contactRef.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className="relative" suppressHydrationWarning>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="author" content="Marc van Dijk" />
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10 z-10">
        <Header
          handleHomeScroll={handleHomeScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />


        <HomeContent />

        <div ref={aboutRef}>
          <AboutContent />
        </div>
      </div>
      <div className={`py-10 ${mounted && theme ? (theme === "dark" ? "bg-slate-800" : "bg-slate-50") : "bg-slate-50"}`} suppressHydrationWarning>
        <div className={`container mx-auto`} ref={contactRef}>
          <ContactContent />
        </div>
      </div>

      <div className={`container mx-auto`} >
        <Footer />
      </div>
    </div>
  );
}
