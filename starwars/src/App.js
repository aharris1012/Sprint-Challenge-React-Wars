
import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';
import {starPeople} from "./starPeople"

const App = () => {
  const [Starpeople, setStarPeople]= useState([]);


useEffect(()=>{
    axios.get('https://swapi.co/api/people/')
    .then ((response)=>{
        console.log (response);
         setStarPeople(response.data.results)
       
       }) 
       .catch (err =>{
        console.log(error)
    })
},[]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {setStarPeople.map((per)=>{
        console.log(per)
        return (
<StarwarsCard person={per}/>
        )
      })}
      
    </div>
  );
}

export default App;
