import styles from "./PageNumberContainer.module.scss";
import PageNumber from "../../components/PageNumber/PageNumber.jsx";

const totalPokemonCount = await fetch(
  "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40"
)
  .then((res) => res.json())
  .then((res) => res.count);

const totalPagesCount = Math.ceil(totalPokemonCount / 40);

const PageNumberContainer = ({ handlePage }) => {
  return (
    <div className={styles.container}>
      {[...Array(totalPagesCount).keys()].map((number) => {
        return (
          <PageNumber
            key={number + 1}
            number={number + 1}
            handlePage={handlePage}
          />
        );
      })}
    </div>
  );
};

export default PageNumberContainer;
