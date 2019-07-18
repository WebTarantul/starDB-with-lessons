import React from 'react'
import ItemDetails,{Record} from '../item-details'
import SwapiService from '../../services/swapi-service'
const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = new SwapiService();

const PersonDetails = ({itemId}) => {
  return (
    <ItemDetails 
      itemId={itemId}
      getData={getPerson}
      getImage={getPersonImage} > 

        <Record field='name' label='Name'  />
        <Record field='gender' label='Gender'  />

    </ItemDetails>
  )
}
const PlanetDetails = ({itemId}) => {
  return (
    <ItemDetails 
      itemId={itemId}
      getData={getPlanet}
      getImage={getPlanetImage} >

        <Record field='name' label='Name'  />
        <Record field='diameter' label='Diameter'  />

    </ItemDetails>
  )
}
const StarshipDetails = ({itemId}) => {
  
  return (
    <ItemDetails 
      itemId={itemId}
      getData={getStarship}
      getImage={getStarshipImage} >

        <Record field='name' label='Name'  />

    </ItemDetails>
  )
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}