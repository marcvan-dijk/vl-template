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
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <img
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
                src="/images/logo.png"
                style={{ height: "30px" }}
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
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-white"
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
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${theme === "light" && "bg-white"
          } dark:text-white top-0 z-10 tablet:flex`}
      >
        <img
          onClick={() => router.push("/")}
          className="font-medium p-2 laptop:p-0 link"
          style={{ height: "30px" }}
          src="/images/logo.png"
          alt="Vlietlanden B.V. logo" />
        <div className="flex">
          <Button onClick={handleHomeScroll}>Home</Button>
          <Button onClick={handleAboutScroll}>Over ons</Button>
          <Button onClick={handleContactScroll}>Contact</Button>
          {mounted && theme && data.darkMode && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <img
                className="h-6"
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
              />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
