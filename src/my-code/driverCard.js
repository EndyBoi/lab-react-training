import React from 'react'
import PropTypes from 'prop-types'
import Rating from './rating'

const DriverCard = (props) => {
  const divStyle = {
    width: '95%',
    height: '175px',
    backgroundColor: '#425cbb',
    margin: '1.5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    boxShadow: '5px 5px 12px rgba(0, 0, 0, .6)',
  }
  const imgStyle = {
    marginRight: '5%',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  }
  const nameStyle = {
    textAlign: 'left',
    color: 'white',
    fontSize: '1.2rem',
  }
  const h1Style = {
    padding: '0%',
    margin: '0%',
    fontWeight: 'bold',
    fontSize: '1.8rem',
  }

  return (
    <div style={divStyle}>
      <img style={imgStyle} src={props.img} />
      <div style={nameStyle}>
        <span style={nameStyle}>
          <h1 style={h1Style}>{props.name}</h1>
        </span>
        <Rating>{props.rating}</Rating>
        <span style={nameStyle}>
          {props.car.model} - {props.car.licensePlate}
        </span>
      </div>
    </div>
  )
}

export default DriverCard
