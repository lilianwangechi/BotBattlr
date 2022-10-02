import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots,botArmy,setBotArmy}) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
       {bots.map((bot) =>  (
        <BotCard key={bot.id}
         bot={bot} 
         botArmy={botArmy}
         setBotArmy={setBotArmy}
         />
        ))}
       
      </div>
    </div>
  );
}

export default BotCollection;

