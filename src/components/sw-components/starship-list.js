import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import {withData, withChildFunction} from '../hoc-helper';

const {getAllStarships} = new SwapiService();

const renderStarshipList = (i) => `${i.name}`;

const StarshipList = withChildFunction(
  withData(ItemList, getAllStarships),
  renderStarshipList
);

export default StarshipList;