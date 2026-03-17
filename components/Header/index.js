import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleHomeScroll, handleAboutScroll, handleContactScroll }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="sticky z-10 top-0 block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-5 laptop:p-0">
              <img
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link inline-block"
                src="/images/logo.png"
                style={{ height: "40px" }}
                alt="Vlietlanden B.V. logo" />

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img className="h-6"
                      src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                      alt="Dark/light mode toggle icon"
                    />
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${!open
                      ? theme === "dark"
                        ? "menu-white.svg"
                        : "menu.svg"
                      : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                      }`}
                    alt="Menu toggle icon"
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${mounted && theme === "dark" ? "bg-slate-800" : "bg-white"
                } shadow-md rounded-md`}
            >
              <div className="grid grid-cols-1">
                <Button onClick={handleHomeScroll}>Home</Button>
                <Button onClick={handleAboutScroll}>Over ons</Button>
                <Button onClick={handleContactScroll}>Contact</Button>
              </div>

            </Popover.Panel>
          </>
        )}
      </Popover>
      <div className={`mt-10 px-5 hidden flex-row items-center justify-between sticky ${mounted && theme === "light" ? "bg-white" : ""} bg-opacity-70 dark:text-white top-0 z-10 tablet:flex`}>
        <img
          onClick={() => router.push("/")}
          className="font-medium p-2 laptop:p-0 link inline-block"
          style={{ height: "40px" }}
          src="/images/logo.png"
          alt="Vlietlanden B.V. logo" />
        <div className="flex">
          <Button onClick={handleHomeScroll}>Home</Button>
          <Button onClick={handleAboutScroll}>Over ons</Button>
          <Button onClick={handleContactScroll}>Contact</Button>
          {mounted && theme && data.darkMode && (
            <Button
              onClick={() => setTheme(mounted && theme === "dark" ? "light" : "dark")}
            >
              <img
                className="h-6"
                src={`/images/${mounted && theme === "dark" ? "moon.svg" : "sun.svg"}`}
              />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
