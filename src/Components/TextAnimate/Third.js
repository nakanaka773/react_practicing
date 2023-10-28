import React from 'react'

export default function Third() {
  return (
    <div>
        <svg width={600} height={600}>
            <text
                x={100}
                y={300}
                style={{fontSize: '4vw', fontWeight: 'bold', fill: 'yellow', stroke: 'black',strokeWidth: '8',paintOrder: 'stroke'}}
            >
                Text Animation
            </text>
        </svg>
    </div>
  )
}
