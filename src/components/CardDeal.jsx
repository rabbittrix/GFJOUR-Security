import videoDrone from "../assets/videoDrone.mp4";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        GFJOUR is a trusted partner Military <br className="sm:block hidden" /> 
        cyber security sector.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Offering advanced AI solutions for prevention and reaction to cyber
        threats. With our expertise, dedication, and innovative technologies, we
        ensure the integrity and security of military systems, enabling mission
        success.
      </p>
      

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <video src={videoDrone} controls autoPlay loop muted alt="video" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
