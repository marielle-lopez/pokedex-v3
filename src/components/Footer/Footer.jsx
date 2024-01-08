import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.text}>
        Icons from{" "}
        <a className={styles["text--link"]} href="https://icons8.com/">
          icons8.com
        </a>
      </p>
      <p className={styles.text}>Made by Marielle Louisse Lopez</p>
    </footer>
  );
};

export default Footer;
