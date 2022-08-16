import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";

export default function UseBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [errors, setErrors] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  // useEffect(() => {
  //   setBooks([]);
  // }, [query]);

  useEffect(() => {
    setBooks([]);
    setLoading(true);
    let cancel;
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setLoading(false);
        setHasMore(res.data.docs.length > 0);
        setBooks((prevBooks) => {
          return [...prevBooks, ...res.data.docs.map((b) => b.title)];
        });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setErrors(true);
      });

    return () => cancel();
  }, [query, pageNumber]);
  return [loading, books, errors, hasMore];
}
