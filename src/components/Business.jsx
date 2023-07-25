import { features } from "../constants"
import styles, { layout } from "../style"
import Button from './Button'

const FeatureCard = ({ icon, title, content }) => (
  <div>
    <div className="">
      <img 
        src={icon} 
        alt="icon" 
        className="color-grey-500"
      />
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Try any of our guitars, <br className="sm:block hidden" /> whenever you want</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our technicians are on hand to help you setup any of our guitars to play and sound the way that you want, so don't be afraid to make some noise!</p>
        <Button styles="mt-10" />
      </div>

      <div className={`flex-col ${layout.sectionImg}`}>
        {features.map((feature, index) => {
          return (
            <FeatureCard key={feature.id} {...feature} index={index} />
          )
        })}
      </div>

    </section>
  )
}

export default Business