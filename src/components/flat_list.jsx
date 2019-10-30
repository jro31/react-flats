import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    <div style={{ width: '100%' }}>
      {props.flats.map(flat => <Flat name={flat.name} image={flat.imageUrl} price={flat.price} currency={flat.priceCurrency} key={flat.name} />)}
    </div>
  );
};

export default FlatList;
