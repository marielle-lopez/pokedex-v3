import styles from "./Card.module.scss";

const Card = ({ name, type, imgSrc, idAttribute }) => {
  return (
    <div id={idAttribute} className={styles.container}>
      <p className={styles.name}>{name}</p>
      <img src={imgSrc} alt={name} />
      <p className={styles.type}>{type}</p>
    </div>
  );
};

export default Card;
