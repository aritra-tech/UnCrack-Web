import styles from './style';
import { NavBar, Home, About, Features, Testimonials, Footer, Download} from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className= {`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Features />
        <Testimonials />
        <Download/>
        <Footer />
      </div>
    </div>

  </div>
);


export default App