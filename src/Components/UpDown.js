import React, { useState } from 'react'

export default function UpDown() {
    const [mycount, setMycount] = useState(1);
    const [enemycount, setEnemycount] = useState(1);
    const [wincount ,setWincount] = useState(0);
    const [isdown,setIsdown] = useState(false);

    function handleClick(){
        setMycount(Math.ceil(Math.random()*13));
        setEnemycount(Math.ceil(Math.random()*13));
        setIsdown(false);
    }

    function downClick(){
        setMycount(Math.ceil(Math.random()*13));
        setEnemycount(Math.ceil(Math.random()*13));
        setIsdown(true);
    }
    function Kekka({isdown,mycount,enemycount}){
        if(isdown){
            mycount = -mycount;
            enemycount = -enemycount;
        }
        if(mycount > enemycount){
            return <p>かち</p>;
        }else if(mycount === enemycount){
            return <p>aiko</p>
        }
        else{
            return <p>make</p>
        }
    }
  return (
    <div className='flex flex-col'>
        <p>{mycount}</p>
        <p>{enemycount}</p>
        <button onClick={handleClick}>アップ</button>
        <button onClick={downClick}>ダウン</button>
        <Kekka isdown={isdown} mycount={mycount} enemycount={enemycount} />

    </div>
  )
}

