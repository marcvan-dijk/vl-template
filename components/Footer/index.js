import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({ }) => {
  return (
    <>
      <div className="mt-5 p-2 laptop:p-0">
        <Socials />
      </div>
    </>
  );
};

export default Footer;
