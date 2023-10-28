import React, { useState, useEffect } from "react";

const Api = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setData(json)
        setIsLoading(false);
      })
      .catch(() => {
        alert("error")
        setIsLoading(false);
      });
  }, []);


  // ここを変更
  return (
    <>
      {data === undefined ? "" : <div>{data[0].title}</div>}
      {isLoading ? <p>ローディング中</p> : <p>終わりだピョーン</p>}
    </>
  );
};

export default Api;