import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Axios from "axios";
import {Card,Name,Text,NiceDiv} from "reactstrap";
import starPeople from "./starPeople"




export default function StarwarsCard(){
    const [Starpeople, setStarPeople]= useState([]);
}

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

return(
    <div>
        {Starpeople.map((per)=>{
            return

            <starPeople
                name={per.name}
                birth={per.birth_year}
                gender={per.gender}
                world={per.homeworld}
                films={per.films}
                        
            
            
            />
        })}
</div>
)