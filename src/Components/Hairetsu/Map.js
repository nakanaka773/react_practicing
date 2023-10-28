import React from 'react'

export default function Map() {
    const manga = [
        "週刊少年ジャンプ",
        "花とゆめ",
        "ガンガン",
        ""
    ]
  return (
    <div>
        {manga.map((zassi) => (
            <div>
                {zassi}
            </div>
        ))}
    </div>
  )
}
