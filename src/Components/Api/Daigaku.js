import React, { useState, useEffect } from "react";

const Daigaku = () => {
  const [datas, setData] = useState([]);
  

  useEffect(() => {
    fetch("https://api.edu-data.jp/api/v1/school?pref_code=33", {
        method: 'GET',
        headers: {
            Authorization: `Bearer token`,
            Accept: 'application/json',
        },
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json)
        
      })
      
      .catch(() => {
        alert("error")
      });
  }, []);
  console.log(datas.schools.data)


  // ここを変更
  return (
    <>
    <div></div>
    </>
  );
};

export default Daigaku;