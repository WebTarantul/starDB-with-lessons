import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import {withData, withChildFunction} from '../hoc-helper';

const {getAllPeople} = new SwapiService();

const renderPeopleList = (i) => `${i.name}`;

const PeopleList = 
  withData(withChildFunction(ItemList,renderPeopleList), getAllPeople);
// const PeopleList = withChildFunction(
//   withData(ItemList, getAllPeople),
//   renderPeopleList
// );

export default PeopleList;