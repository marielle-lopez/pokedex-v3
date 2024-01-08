import styles from "./Card.module.scss";

const Card = ({ name, type }) => {
  return (
    <div>
      <p className={styles.name}>{name}</p>
      <p className={styles.type}>{type}</p>
    </div>
  );
};

export default Card;
