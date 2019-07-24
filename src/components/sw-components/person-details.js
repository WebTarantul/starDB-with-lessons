import React from 'react'
import { SwapiServiceConsumer } from '../swapi-service-context';
import ItemDetails, { Record } from '../item-details';

const PersonDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
        {({getPerson, getPersonImage}) => {
          return (
            <ItemDetails 
            itemId={itemId}
            getData={getPerson}
            getImage={getPersonImage} > 
      
              <Record field='name' label='Name'  />
              <Record field='gender' label='Gender'  />
      
          </ItemDetails>
          )
        }}
    </SwapiServiceConsumer>
  )
}

export default PersonDetails;