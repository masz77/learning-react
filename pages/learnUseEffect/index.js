import { useEffect, useState } from "react";

export default function useEffectLearning() {
  const info = ["posts", "users", "comments"];
  const [resType, setResType] = useState(info[0]);
  const [contents, setContent] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resType}`)
      .then((response) => response.json())
      .then((json) => setContent(json));
  }, [resType]);

  return (
    <div>
      {/* <button onClick={() => setResType("posts")}>Posts</button>
      <button onClick={() => setResType("users")}>Users</button>
      <button onClick={() => setResType("comments")}>Comments</button> */}
      {info.map((_info) => (
        <button key={_info} onClick={() => setResType(_info)}>
          {_info}
        </button>
      ))}
      <div>{resType}</div>
      {contents.map((content) => (
        <pre key={JSON.stringify(content)}>{JSON.stringify(content)}</pre>
      ))}
    </div>
  );
}
