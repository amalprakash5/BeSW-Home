import Image from "next/image";
import React, { useState } from 'react'
import DoNation from "../assets/DoNation_img.png";
import DoRequest from "../assets/DoRequest_img.jpg";

const Status = () => {
    return (
        <div className="justify-center items-center bg-white text-gray-800 my-20 py-24 px-5 pb-0">
            <div className="flex flex-row">
                <div className="flex flex-col items-center flex-grow">
                    <div className="container w-11/12 justify-center items-center border border-gray-800 bg-white flex flex-grow">
                        <a href="http://localhost:3001/" target="_blank" rel="noreferrer"><Image src={DoRequest} alt="" /></a>
                    </div>
                    <div>
                        <h5 className="text-center text-3xl">Request Portal</h5>
                    </div>
                </div>
                <div className="flex flex-col items-center flex-grow">
                    <div className="container w-11/12 justify-center items-center border border-gray-800 bg-white flex flex-grow">
                        <a href="http://localhost:3002/" target="_blank" rel="noreferrer"><Image src={DoNation} alt="" /></a>
                    </div>
                    <h5 className="text-center text-3xl">Donation Portal</h5>
                </div>
            </div>
        </div>
    )
}

export default Status
