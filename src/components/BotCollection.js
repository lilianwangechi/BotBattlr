import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots}) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
       {bots.map((bot) =>  (
        <BotCard keys={bot.id} bot={bot}/>
        ))}
       
      </div>
    </div>
  );
}

export default BotCollection;

