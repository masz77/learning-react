export default function PokemonList({ pokemon }) {
  //   const pok = props.pokemon;
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}
