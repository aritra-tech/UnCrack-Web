import styles, {layout} from '../style'
import { features } from '../const'


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          No worries we'll handle<br className="sm:block hidden" />the credentials.
        </h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-3`}>
        With the access of right password at the right time, can save your time.With the convenience of fingerprint authentication, 
        users can effortlessly retrieve their login information without the fear of forgetting passwords or losing crucial details. 
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index) => (
          <FeatureCard key ={feature.id} {...feature} index={index} />
        ))}
      </div>
      
    </section>
  )
}

export default Features