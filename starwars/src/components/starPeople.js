import React from "react";

const starPeople = props => {


    return (
        <NiceDiv>
    <Card>
        <Name>{props.name}</Name>
        <Text>BORN IN : {props.birth_year}</Text>
        <Text>HE? SHE? OR WHAT?: {props.gender}</Text>
        <Text>FROM: {props.homeworld}</Text>
        <Text>{props.films}</Text>
    </Card>
</NiceDiv>
    )
}