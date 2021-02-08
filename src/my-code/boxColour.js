import React from 'react';
import PropTypes from 'prop-types';

const boxColour = (props) => {
  const divStyle = {
    display: 'flex',
    border: '1px solid',
    color: 'black',
    margin: '.8%',
    padding: '0.5%',
    backgroundColor: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
  };
  return (
    <div style={divStyle}>
      <h3>
        rgb({props.r},{props.g},{props.b})
      </h3>
    </div>
  );
};

boxColour.propTypes = {};

export default boxColour;
