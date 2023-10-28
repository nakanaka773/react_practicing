import React, { useState, useEffect } from "react";

const Yubin = () => {
    const [data, setData] = useState(undefined);
    const [number, setNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${number}`)
            .then((res) => res.json())
            .then((json) => {
                setData(json)
            })

            .catch(() => {
                alert("error")

            });
    };

    useEffect(() => {

    }, []);


    // ここを変更
    return (
        <>
            {data === undefined ? "" : 
            <div>
                <p>{data.results[0].address1}</p>
                <p>{data.results[0].address2}</p>
                <p>{data.results[0].address3}</p>
            </div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="number">メールアドレス</label>
                    <input id="number" type="number" value={number}
                        onChange={(e) => setNumber(e.target.value)} />
                </div>
                <div>
                    <button type="submit">送信</button>
                </div>
            </form>
        </>
    );
};

export default Yubin;