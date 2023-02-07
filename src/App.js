import React from 'react';
import CardList from './CardList';

import SearchBox from './SearchBox';
import "./App.css";


//state is an object that describe the app
//for uing states we need class components so converting App to class comp


class App extends React.Component {
    
        robotsName
        constructor(){
            super()
            this.state={
                    robots : [],
                    searchfield :''
            
            }
            } 

        
 
       //create mothers function 
            onSearchChange=(event)=>{
                this.setState({searchfield : event.target.value});
                //console.log(event.target.value);   //inside console we found target and value(found .target.value in console.log(event) console)
            } 
            
            changeMessage=()=>{ 
                this.setState({message: "No robots found"})
            }
        
            componentWillMount(){     
                   console.log("Component Will Mount has run"); 
        }            //lifecycle method  Mounting             
            
            
            
            componentWillMount(){
                fetch("https://jsonplaceholder.typicode.com/users")
                .then(response=>{
                    return  response.json();
                })
                .then(users=>{
                    this.setState({robots:users});
                })
                this.robotsName ="Dipta";
                 
            }
            
            
            
             
            
            render(){

                console.log("ComponenT Render has run");
            const filteredRobotsArray = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());})

            return(
        <div className="tc">
            <h1>Robo Fans</h1>
            <h1>{this.robotsName}</h1>
            
            {/* <button type="button" onClick ={this.changeMessage}>subscribe</button> */}
            {/* {filteredRobotsArray.length === 0 ? this.changeMessage() : ""} */}
             <SearchBox searchChange={this.onSearchChange}/> {/* sending the onSearch function to SearchBox */}
            <CardList robots = {filteredRobotsArray}/>
        
        </div>

    )
    }
}



export default App;