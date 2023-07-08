import styles from "../style"
import { scanqr } from "../assets"

const Download = () => (

    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Download the app!</h2>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
        Scan the qr to download the app from PlayStore and just securly store your passwords.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <img src={scanqr} alt="qr" className="w-[200px] h-[200px]" />
    </div>
  </section>
)

export default Download