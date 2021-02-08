import React from 'react';
import PropTypes from 'prop-types';

const IdCard = (props) => {
  const formattedBirth = props.birth.toString().substring(0, 15);

  const divStyle = {
    display: 'flex',
    border: '1px solid',
    color: 'black',
    margin: '.8%',
    padding: '0.5%',
  };

  return (
    <div style={divStyle}>
      <img src={props.picture} />
      <ul>
        <li>
          <b>First Name: </b>
          {props.firstName}
        </li>
        <li>
          <b>Last Name: </b>
          {props.lastName}
        </li>
        <li>
          <b>Gender: </b>
          {props.gender}
        </li>
        <li>
          <b>Height: </b>
          {props.height}m
        </li>
        <li>
          <b>Birth: </b>
          {formattedBirth}
        </li>
      </ul>
    </div>
  );
};

IdCard.propTypes = {};

export default IdCard;
