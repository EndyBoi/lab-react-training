import React from 'react'
import PropTypes from 'prop-types'

const creditCard = (props) => {
  const ccNumberDisplay =
    props.number[12] + props.number[13] + props.number[14] + props.number[15]

  const ccExpirationDisplay =
    '0' +
    props.expirationMonth +
    '/' +
    props.expirationYear.toString()[2] +
    props.expirationYear.toString()[3]

  let imgSrc = ''

  if (props.type === 'Visa') {
    imgSrc = './img/visa.png'
  }
  if (props.type === 'Master Card') {
    imgSrc = './img/master-card.svg'
  }

  const divStyle = {
    position: 'relative',
    margin: '1.5%',
    width: '350px',
    height: '175px',
    backgroundColor: props.bgColor,
    color: props.color,
    display: ' inline-block',
    flexDirection: 'column',
    borderRadius: '15px',
    boxShadow: '5px 5px 12px rgba(0, 0, 0, .6)',
  }
  const imgStyle = {
    display: ' inline-block',
    padding: '5%',
    justifyContent: 'end',
    height: '16%',
    float: 'right',
  }
  const ccNumStyle = {
    position: 'absolute',
    float: 'center',
    padding: '10% ',
    fontSize: '1.5rem',
  }
  const nameStyle = {
    textAlign: 'left',
    position: 'absolute',
    bottom: '8px',
    left: '16px',
    fontSize: '14px',
  }

  return (
    <div style={divStyle}>
      <span>
        <img src={imgSrc} style={imgStyle}></img>
      </span>
      <div style={ccNumStyle}>
        <h2>**** **** **** {ccNumberDisplay}</h2>
      </div>
      <div style={nameStyle}>
        <span>
          Expires: {ccExpirationDisplay} {props.bank}
        </span>
        <br></br>
        <span>{props.owner}</span>
      </div>
    </div>
  )
}

creditCard.propTypes = {}

export default creditCard
