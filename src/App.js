import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';


//state is an object that describe the app
//for uing states we need class components so converting App to class comp
// const state ={
//     robots : robots,
//     dearchfield:''
// }




class App extends React.Component {
    
    
        constructor(){
            super()
            this.state={
                    //  message :"Robo Cards" 
                    robots : robots,
                    searchfield :''
            
            }
            } 

        // changeMessage=()=>{
        //    this.setState({message : "You are officially in my website"})
        // }
 
       //create mothers function 
            onSearchChange=(event)=>{
                this.setState({searchfield : event.target.value});
                //console.log(event.target.value);   //inside console we found target and value
            } 
            
        
        
        render(){
        const filteredRobotsArray = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());})

    return(
        <div className="tc">
            <h1>{this.state.message}</h1>
            {/* <button type="button" onClick ={this.changeMessage}>subscribe</button> */}
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots = {filteredRobotsArray}/>
        
        </div>

    )
    }
}



export default App;