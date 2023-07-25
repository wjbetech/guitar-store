import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full button-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-medium text-[18px] leading-[23.4px] text-gradient mr-2">
          <span className="orb-text-gradient font-semibold">Get</span>
        </p>
          <img 
            src={arrowUp} 
            className="w-[23px] h-[23px] object-contain"
            alt="up arrow" 
            />
        </div>
        <p className="font-medium text-[18px] leading-[23.4px] orb-text-gradient">
          <span className="text-gradient font-semibold">Started</span>
        </p>
    </div>
  </div>
)

export default GetStarted