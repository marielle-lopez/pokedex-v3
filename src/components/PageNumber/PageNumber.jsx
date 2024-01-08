import styles from "./PageNumber.module.scss";

const PageNumber = ({ number }) => {
  return <button className={styles.button}>{number}</button>;
};

export default PageNumber;
