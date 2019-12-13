import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Axios from "axios";




export default function StarwarsCard(){
    const [Starpeople, setStarPeople]= useState([{}]);
}

useEffect(()=>{
    Axios.get('https://swapi.co/api/people/')
    .then ((result)=>{
        const People = result.data.results;
        setStarPeople(People);
    })
},[])

return(
    <div>
        {Starpeople.map(per =>{
return
<NiceDiv>
    <Card>
        <Name>{per.name}</Name>
        <Text>BORN IN : {per.birth_year}</Text>
        <Text>HE? SHE? OR WHAT?: {per.gender}</Text>
        <Text>FROM: {per.homeworld}</Text>
        <Text>{per.films}</Text>
    </Card>
</NiceDiv>
        })}
    </div>
)
    