import styles from "../styles/Card.module.css";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper2}>
        <Image src={props.src} className={styles.img} width="60" height="60" />
        <div className={styles.mid}>
          <div className={styles.names}>
            <p className={styles.name}>{props.name}</p>
            {props.new ? <p className={styles.new}>NEW!</p> : null}
            {props.featured ? (
              <p className={styles.featured}>FEATURED</p>
            ) : null}
          </div>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.tags}>{props.tags}</p>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.stacks}>
        {props.stacks.map((stack) => (
          <p className={styles.stack}>{stack}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
