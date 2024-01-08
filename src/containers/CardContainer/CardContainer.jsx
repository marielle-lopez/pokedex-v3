import Card from "../../components/Card/Card";
import styles from "./CardContainer.module.scss";

const pokemonResults = await fetch(
  "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40"
)
  .then((res) => res.json())
  .then((res) => res.results);

const pokemonPromises = pokemonResults.map((result) =>
  fetch(result.url).then((res) => res.json())
);

const pokemonResponse = await Promise.all(pokemonPromises);

const pokemon = pokemonResponse.map((response) => response);

const CardContainer = () => {
  console.log(pokemon);

  return (
    <div className={styles.container}>
      {pokemon.map((entry) => (
        <Card
          name={entry.name}
          type={entry.types.map((type) => type.type.name)}
          imgSrc={entry.sprites["front_default"]}
          idAttribute={entry.name}
        />
      ))}
    </div>
  );
};

export default CardContainer;
