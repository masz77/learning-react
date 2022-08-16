import UseBookSearch from "../components/UseBookSearch";
import { useState, useEffect } from "react";

export default function InfiniteScrolling() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const [displayMessage, setDisplayMessage] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => setDisplayMessage(query), 700);
    return () => clearTimeout(timeOutId);
  }, [query]);

  const [loading, books, errors, hasMore] = UseBookSearch(query, page);

  function searchHandler(event) {
    setQuery(event.target.value);
    setPage(1);
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Search here..."
        onChange={searchHandler}
      ></input>
      <p>{displayMessage}</p>
      {books.map((book) => (
        <div key={book}>{book}</div>
      ))}
      {/* <UseBookSearch /> */}
      {loading && <div>Loading...</div>}
      {errors && <div>{errors}</div>}
    </div>
  );
}
