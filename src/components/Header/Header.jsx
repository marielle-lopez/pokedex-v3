import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="../src/assets/logo.png" />
      <h1 className={styles.heading}>Pokédex</h1>
    </div>
  );
};

export default Header;
