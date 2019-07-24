import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import {withData, withChildFunction} from '../hoc-helper';

const {getAllPlanets} = new SwapiService();

const renderPlanetList = (i) => `${i.name}`;

const PlanetList = withChildFunction(
  withData(ItemList, getAllPlanets),
  renderPlanetList
);

export default PlanetList;