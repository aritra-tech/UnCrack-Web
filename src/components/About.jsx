import styles, { layout } from '../style'
import {home,google} from '../assets'


const About = () => {
  return (
    <section id='about' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>

        <img src={home} alt="home" className='w-[90%] h-[90%] relative z-[5]'/>

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}

      </div>

      <div className={layout.sectionInfo}>
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
        <img src={google} alt="google_play" />
      </div>

      </div>
    </section>
  )
}

export default About