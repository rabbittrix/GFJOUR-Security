import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our Expertise <br className="sm:block hidden" /> in AI Solutions
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We specialize in developing cutting-edge AI technologies tailored for
        the Military cyber security sector. Our solutions integrate advanced
        algorithms and machine learning techniques to detect, analyze, and
        respond to cyber threats in real-time.
      </p>
      <h2 className={styles.heading2}>
        GFJOUR's Commitment <br className="sm:block hidden" /> to Excellence
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We are committed to delivering top-notch AI solutions that meet the
        unique needs of the Military cyber security sector. We collaborate
        closely with our clients to understand their specific challenges and
        provide tailored, robust, and scalable solutions.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div> */}
    </div>
  </section>
);

export default Billing;
