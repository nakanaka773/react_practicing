import React from 'react'

export default function Kensaku() {
    let searchKeyword = "girl"; // ユーザーが入力する文字列

    const listmoto = [
        {text: "暁のヨナ", janre: "girl"},
        {text: "ハンターハンター", janre: "boy"},
        {text: "花咲ける青少年", janre: "girl"},
        {text: "赤髪の白雪姫", janre: "girl"},
    ]

    const list = listmoto.filter((text) => {
        return text.janre === searchKeyword;
    });
    return (
        <div>
            {list.map((item) => (
                <p>{item.text}</p>
            ))}
        </div>
    )
}
