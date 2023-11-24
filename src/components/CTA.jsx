import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Come be our partner, here we don't sell software, we create partners!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need, software, hardware, we create and develop projects
        in partnership or turnkey.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button /> 
      
    </div>
  </section>
);

export default CTA;
