import React from 'react';
import PropTypes from 'prop-types';

const random = (props) => {
  const divStyle = {
    display: 'flex',
    border: '1px solid',
    color: 'black',
    margin: '.8%',
    padding: '0.5%',
  };

  let rand = Math.random() * (props.max - props.min) + props.min;
  return (
    <div style={divStyle}>
      <h3>
        Random value between {props.min} and {props.max} => {Math.floor(rand)}
      </h3>
    </div>
  );
};

random.propTypes = {};

export default random;
