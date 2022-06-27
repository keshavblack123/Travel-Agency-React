import React from 'react'

import PropTypes from 'prop-types'

import './room2container.css'

const Room2Container = (props) => {
  return (
    <div className="room2container-room2container">
      <div className="room2container-room-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="room2container-image"
        />
        <div className="room2container-container">
          <span>{props.text}</span>
          <h1 className="room2container-text01">{props.heading}</h1>
          <span>{props.text3}</span>
          <span>{props.text1}</span>
        </div>
        <button className="room2container-button button">
          <span className="room2container-text04">
            <span>Book</span>
          </span>
        </button>
      </div>
      <div className="room2container-hotel-container">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="room2container-image1"
        />
        <div className="room2container-container1">
          <span>{props.text4}</span>
          <h1 className="room2container-text07">{props.heading1}</h1>
          <span>{props.text7}</span>
          <span>{props.text11}</span>
        </div>
        <button className="room2container-button1 button">
          <span className="room2container-text10">
            <span>Book</span>
          </span>
        </button>
      </div>
    </div>
  )
}

Room2Container.defaultProps = {
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: 'Room Name',
  text1: 'Pax Allowable',
  text4: '',
  heading: 'Room Name',
  image_alt1: 'image',
  text7: 'Price',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: '',
  text11: 'Pax Allowable',
  text3: 'Price',
  image_alt: 'image',
}

Room2Container.propTypes = {
  image_src1: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  heading: PropTypes.string,
  image_alt1: PropTypes.string,
  text7: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text11: PropTypes.string,
  text3: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Room2Container
