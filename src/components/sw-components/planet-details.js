import React from 'react'
import { SwapiServiceConsumer } from '../swapi-service-context';
import ItemDetails, { Record } from '../item-details';

const PlanetDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
     {({getPlanet, getPlanetImage}) => {
       return (
        <ItemDetails 
        itemId={itemId}
        getData={getPlanet}
        getImage={getPlanetImage} >
  
          <Record field='name' label='Name'  />
          <Record field='diameter' label='Diameter'  />
  
      </ItemDetails>
       )
     }}
    </SwapiServiceConsumer>
  )
}

export default PlanetDetails;