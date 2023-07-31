import { features } from "../constants"
import styles, { layout } from "../style"
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20x] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card rounded-[25px]`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} business-cards my-[6px] mr-4`}>
      <img 
        src={icon} 
        alt="icon" 
        className="object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-semibold text-[18px] leading-[23px] my-[6px]">{title}</h4>
      <p className="text-[15px] mb-[6px]">{content}</p>
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