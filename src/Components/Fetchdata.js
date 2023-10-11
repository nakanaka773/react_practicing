// useEffectをインポートしておく
import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState(undefined);
  // ここを修正
  useEffect(() => {
    fetch("https://swapi.dev/api/people/3")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => alert("error"));
  }, []);
  console.log(data);
   
  return (
    <p>あり</p>
  );
};

export default FetchData;