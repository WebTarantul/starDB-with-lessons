import React from 'react';

import './item-list.css';

const ItemList = (props) => {
  const {children, onItemSelected, data} = props;
  const renderItems = (arr) => {
    return arr.map(item => {
      const label = children(item);

      return (
        <li className="list-group-item" 
          key={item.id} 
          onClick={() => onItemSelected(item.id)}>
            {label}
      </li>
      )
    })
  }

  const listItems = renderItems(data);
  return (
    <ul className="item-list list-group">
      {listItems}
    </ul>
  );
}

export default ItemList;