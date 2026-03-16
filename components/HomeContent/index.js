import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const HomeContent = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="z-0" style={{ height: "100vh" }}>
      <img
        style={{ position: "absolute", top: 0, left: 0 }}
        className="w-screen min-h-screen h-screen object-cover"
        src="/images/droneview.jpg"
        alt="Vlietlanden drone"
      />
    </div>
  );
};

export default HomeContent;
