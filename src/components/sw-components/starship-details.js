import React from 'react'
import { SwapiServiceConsumer } from '../swapi-service-context';
import ItemDetails, { Record } from '../item-details';

const StarshipDetails = ({itemId}) => {
  
  return (
  
    <SwapiServiceConsumer>
      {({getStarship, getStarshipImage}) => {
        return (
          <ItemDetails 
          itemId={itemId}
          getData={getStarship}
          getImage={getStarshipImage} >
    
            <Record field='name' label='Name'  />
    
        </ItemDetails>
        )
      }}
    </SwapiServiceConsumer>
  )
}

export default StarshipDetails;