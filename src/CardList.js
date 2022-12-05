import React from "react";
import Card from './Card';
import { robots } from "./robots";

const CardList = () => {

    //looping through array .map & render them to the U:I
    
      const cardcomponent = robots.map((user, i) => {
        return <Card key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}/>
      })

    return (
   <div>
        {cardcomponent}
    </div>

    )
};

export default CardList