import React from 'react'; 
import { connect } from 'react-redux'; 
import Card from '../Card/Card';

export const CardContainer = (props) => {
  const { houses } = props;

  const displayCards = houses.map(house => {
    return (<Card {...house} />)
  });
  return (
    <div className='Container'>
      {displayCards}
    </div>
  );
};


export const mapStateToProps = state => ({
  houses: state.houses
});

export default connect(mapStateToProps, null)(CardContainer);