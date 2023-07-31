import React from 'react'
import styles from '../style'
import { logo } from "../assets"
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} py-6 flex-col `}>
    <div className={`${styles.flexStart} md:flex-row flex-col w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={logo} alt="company logo" className="w-[240px] h-[72px] object-contain" />
        <p className={`${styles.paragraph} ml-4 mt-4 max-w-[310px]`}>Check out your local GuitarWorld with stores across the USA</p>
      </div>

      {/* links */}
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 mb-8">
        {footerLinks.map((footerLink) => {
          return (
            <div key={footerLink.key} className="flex flex-col ss:my-0 min-w-[150px]">
              <h4 className="font-medium text-[20px] leading-[27px] mb-6">{footerLink.title}</h4>
              <ul>
                {footerLink.links.map((link, index) => {
                  return (
                    <li key={link.name} className={`font-normal text-[16px] leading-[24px] footer-links cursor-pointer ${index !== footerLink.links.length - 1 ? "mb-2" : "mb-0"}`}>{link.name}</li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>

    {/* externals */}
    <div className="w-full flex justify-between items-center pt-6 design-credit">
        
        <div className="flex flex-row md:mt-0 mt-4">
          {socialMedia.map((icon, index) => {
            return (
              <img key={icon.id} src={icon.icon} alt={icon.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`} />
            )
          })}
        </div>

        {/* credit */}
        <div className="flex flex-row">
          <p className="font-medium text-center text-[12px] leading-[27px]">website design by @wjbetech</p>
        </div>
      </div>

  </section>
)

export default Footer