import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    <div style={{ width: '100%' }}>
      {console.log(props)}
      {props.flats.map(flat => <Flat name={flat.name} image={flat.imageUrl} price={flat.price} currency={flat.priceCurrency} key={flat.name} lat={flat.lat} lng={flat.lng} selectProperty={props.selectProperty} />)}
    </div>
  );
};

export default FlatList;
