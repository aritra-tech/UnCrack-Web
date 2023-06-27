import styles from '../style'
import { motion } from "framer-motion"
import {discount,home} from '../assets'
import Button from './Button'

const Home = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row items-center py-[2px] px-2 bg-discount-gradient rounded-[10px] mb-5">
          <img src={discount} alt="discount" className="w-[20px] h-[20px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Free</span> For{" "}
            <span className="text-white">All</span> Users
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-white ss:leading-[60px]">
            Go ahead. Forget your{" "}
            <span className="text-gradient">Password.</span> {" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[490px] mt-4`}>
          Store your passwords and other sensitive data. UnCrack is here to help.
          Protect yourself, your families information with simple security 
          and actionable insights.
        </p>

        <Button styles={`mt-10`}/>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <motion.div
          initial={{ opacity: 0 }}  // Initial opacity value (hidden)
          animate={{ opacity: 10 }}  // Final opacity value (visible)
          transition={{ ease: [0.83, 0.67, 0.67, 0.17], duration: 3 }}
          translate='yes'
        >
          <img src={home} alt="uncrack" className="w-[90%] h-[90%] relative z-[5]" />

          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}

      </motion.div>
      </div>
    </section>

  );
}

export default Home