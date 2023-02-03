import React from 'react';
import Card from './Card';
import {robots} from './robots';

const CardList=({robots})=>{
    
    const cardArray = robots.map((data,i)=>{
        return( <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        )
    });
    return(
        <div>
            {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
            <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/> */}
        
            {cardArray}
        </div>
    )
}

export default CardList;