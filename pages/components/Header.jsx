import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header
            className="flex justify-between items-center p-2
         bg-white shadow-lg fixed top-2 left-0 right-0"
        >
            <div
                className="flex justify-start items-center 
      text-xl text-black space-x-1"
            >
                <div >
                    <Image src={logo} width={180} height={100} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;
