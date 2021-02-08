import React from 'react'
import PropTypes from 'prop-types'

const Greetings = (props) => {
  let greet = ''

  const divStyle = {
    display: 'flex',
    border: '1px solid',
    color: 'black',
    margin: '.8%',
    padding: '0.5%',
  }

  if (props.lang === 'fr') {
    greet = 'Bonjour'
  }

  if (props.lang === 'de') {
    greet = 'Hallo'
  }

  return (
    <div style={divStyle}>
      <h3>
        {greet} {props.children}
      </h3>
    </div>
  )
}

Greetings.propTypes = {}

export default Greetings
