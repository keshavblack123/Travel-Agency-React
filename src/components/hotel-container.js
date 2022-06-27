import React from 'react'

import PropTypes from 'prop-types'

import './hotel-container.css'

const HotelContainer = (props) => {
  return (
    <div className="hotel-container-hotel-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="hotel-container-image"
      />
      <div className="hotel-container-container">
        <span>{props.text}</span>
        <h1 className="hotel-container-text1">{props.heading}</h1>
        <span>{props.text1}</span>
        <span>{props.text2}</span>
        <span>{props.text3}</span>
      </div>
      <button className="hotel-container-button button">
        <span className="hotel-container-text5">
          <span>More Info</span>
        </span>
      </button>
    </div>
  )
}

HotelContainer.defaultProps = {
  text1: 'Location',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading: 'Hotel Name',
  text3: 'Price',
  text2: 'Rating',
  image_alt: 'image',
  text: '',
}

HotelContainer.propTypes = {
  text1: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
}

export default HotelContainer
