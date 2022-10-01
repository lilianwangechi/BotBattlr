import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
 const [bots,setBots] = useState()
 console.log(bots)
 useEffect(()=>{
  fetch("http://localhost:8002/bots")
  .then(response => response.json())
  .then(bots=>setBots(bots))
 },[])
  return (
    <div>
      <YourBotArmy />
      <BotCollection botData={bots} />
    </div>
  )
}

export default BotsPage;
