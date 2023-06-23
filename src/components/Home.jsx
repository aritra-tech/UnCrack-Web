import styles from '../style'
import discount from '../assets/Discount.svg'

const Home = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[20px] h-[20px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Free</span> For{" "}
            <span className="text-white">All</span> Users
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[45px] text-white ss:leading-[80px]">
            Go ahead. Forget your{" "}
            <span className="text-gradient">Password.</span> {" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Store your passwords and other sensitive data. UnCrack is here to help.
          Protect yourself, your families information with simple security 
          and actionable insights.
        </p>

      </div>
    </section>

  );
}

export default Home