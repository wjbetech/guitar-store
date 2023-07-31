import React from 'react'
import styles from './style'

// import bundle of components
import { NavBar, Hero, Stats, Business, Testimonials, CTA, Footer, GetStarted } from "./components/bundler";


const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>

      {/* navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      {/* hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* main content */}
      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App
