import styles, { layout } from '../style'
import {home,google} from '../assets'
import { motion } from "framer-motion"


const About = () => {
  return (
    <section id='about' className={layout.sectionReverse}>
      <motion.div className={layout.sectionImgReverse}
        initial={{ opacity: 0 }}  // Initial opacity value (hidden)
        animate={{ opacity: 10 }}  // Final opacity value (visible)
        transition={{ ease: [0.83, 0.67, 0.67, 0.17], duration: 2.5 }}
      >

        <img src={home} alt="home" className='w-[90%] h-[90%] relative z-[5]'/>

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}

      </motion.div>

      <motion.div className={layout.sectionInfo}
        initial={{ opacity: 0 }}  // Initial opacity value (hidden)
        animate={{ opacity: 10 }}  // Final opacity value (visible)
        transition={{ ease: [0.83, 0.67, 0.67, 0.17], duration: 2.3 }}
      >
        <h1 className={styles.heading2}>
            So, what is{" "}
            <span className='text-gradient'>UnCrack ?</span> {" "}
        </h1>
        <p className={`${styles.paragraph} mx-w-[490px] mt-5`}>
        Uncrck unlock the power of secure informtion with ease! 
        This innovative app securely stores all your login credentials and other important 
        information, so you never have to worry about forgetting passwords or searching for lost data. 
        Keep your digital life organized and protected with UnCrack.
        </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      <a
        href="https://play.google.com/store/apps/details?id=com.geekymusketeers.uncrack"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={google} alt="google_play" className='mr-5 w-[90%]' />
      </a>
        <a
          href="https://www.producthunt.com/posts/uncrack?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-uncrack"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=381745&theme=dark"
            alt="UnCrack - Manage & secure your credentials efficiently | Product Hunt"
            className=' w-[80%]'
          />
        </a>
      </div>

      </motion.div>
    </section>
  )
}

export default About