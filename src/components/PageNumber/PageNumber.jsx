import styles from "./PageNumber.module.scss";

const PageNumber = ({ number, handlePage }) => {
  return (
    <button
      id={`pageNumber${number}`}
      className={styles.button}
      onClick={() => {
        handlePage(number);
      }}
    >
      {number}
    </button>
  );
};

export default PageNumber;
