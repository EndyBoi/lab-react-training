import React from 'react'
import PropTypes from 'prop-types'

const Rating = (props) => {
  const empty = '☆'
  const full = '★'

  const divStyle = {
    display: 'flex',
    fontSize: '40px',
  }

  const fillRate = () => {
    let rate = ''
    let j = Math.round(props.children)
    let i = 0
    while (i < 5) {
      if (j > 0) {
        rate += full
        i++
        j--
      }
      if (j === 0) {
        if (i < 5) {
          rate += empty
          i++
        }
      }
    }
    return rate
  }
  return (
    <div style={divStyle}>
      <span>{fillRate(props.children)}</span>
    </div>
  )
}

Rating.propTypes = {}

export default Rating
