import Image from "next/image";
import ourStoryPic from "../../images/home-image-1.jpg";
import styles from "./home.module.css";


export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={ourStoryPic}
          alt="Out story pic"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className={styles.bgHeader}>
        Crafting Tomorrow: Where Code Shapes Innovation
      </h1>
      <p className={styles.bgText}>
        Embrace the art of coding and the joy of problem-solving – where
        creativity meets functionality, and every line of code builds the
        future.
      </p>
    </>
  );
}
