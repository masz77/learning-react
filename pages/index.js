import { useState, useEffect } from "react";
import PokemonList from "./../components/PokemonList";
import axios from "axios";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancelReq;

    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancelReq = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });

    return () => cancelReq();
  }, [currentPageUrl]);

  function goToNextPage() {
    console.log("Clicked next");
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    console.log("Clicked prev");
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...";

  return (
    <div>
      <PokemonList pokemon={pokemon} />
      {/* <Pagination
        // nextPage={nextPageUrl ? goToNextPage : null}
        // prevPage={prevPageUrl ? goToPrevPage : null}
        nextPage={goToNextPage}
        prevPage={goToPrevPage}
      /> */}
      {prevPageUrl ? <button onClick={goToPrevPage}>Previous</button> : null}
      {nextPageUrl ? <button onClick={goToNextPage}>Next</button> : null}
    </div>
  );
}
