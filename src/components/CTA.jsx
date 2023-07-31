import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] cta-footer`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2}`}>Find your new favorite guitar!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Start browsing makes, sizes and styles <br></br> to find your new favorite guitar</p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA