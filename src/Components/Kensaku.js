import React from 'react'

export default function Kensaku() {
    let searchKeyword = "b"; // ユーザーが入力する文字列

    const list = ["a", "b", "c"].filter((text) => {
        return text === searchKeyword;
    });
    return (
        <div>
            {list.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    )
}
