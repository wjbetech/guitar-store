import React from 'react';
import styles from "../style";
import { discount, jackson } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section 
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[3px] px-4 bg-discount-gradient rounded-[10px]">
          <span className="text-amber-600">20%</span>  &nbsp;
          discount using <span className="text-amber-600">&nbsp; "GUITARWORLD"</span>
        </div>

        <div className="flex flex-row justify-between items-center w-full mt-10">
          <h1 className="text-gray-500 text-left flex-1 font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">Thousands of<br className="sm:block hidden"/> {" "} 
          <span className="text-gradient">High Quality</span> {" "} <br />Instruments
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-20`}>Our experts source acoustic, electric and bass guitars for both left and right handed players to help you find your new favorite guitar.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img 
          src={jackson} 
          alt="jackson guitar"
          className="h-[70%] relative z-5 mt-[-100px]" 
        />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>

    </section>
  )
}

export default Hero