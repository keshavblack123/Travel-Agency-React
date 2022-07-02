import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hotel2container.css'

const Hotel2Container = (props) => {
  return (
    <div className={`hotel2container-hotel2container ${props.rootClassName} `}>
      <div className="hotel2container-hotel-container">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="hotel2container-image"
        />
        <div className="hotel2container-container">
          <span>{props.text4}</span>
          <h1 className="hotel2container-text01">{props.heading1}</h1>
          <span>{props.text11}</span>
          <span>{props.text21}</span>
          <span>{props.text31}</span>
        </div>
        <Link to="/hotel-info-page" className="hotel2container-navlink button">
          <span className="hotel2container-text05">
            <span>More Info</span>
          </span>
        </Link>
      </div>
      <div className="hotel2container-hotel-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="hotel2container-image1"
        />
        <div className="hotel2container-container1">
          <span>{props.text}</span>
          <h1 className="hotel2container-text08">{props.heading}</h1>
          <span>{props.text1}</span>
          <span>{props.text2}</span>
          <span>{props.text3}</span>
        </div>
        <button className="hotel2container-button button">
          <span className="hotel2container-text12">
            <span>More Info</span>
          </span>
        </button>
      </div>
    </div>
  )
}

Hotel2Container.defaultProps = {
  text3: 'Price',
  heading: 'Hotel Name',
  text2: 'Rating',
  text21: 'Rating',
  text1: 'Location',
  text31: 'Price',
  heading1: 'Hotel Name',
  rootClassName: '',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  image_alt1: 'image',
  text: '',
  text11: 'Location',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text4: '',
}

Hotel2Container.propTypes = {
  text3: PropTypes.string,
  heading: PropTypes.string,
  text2: PropTypes.string,
  text21: PropTypes.string,
  text1: PropTypes.string,
  text31: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  text: PropTypes.string,
  text11: PropTypes.string,
  image_src: PropTypes.string,
  text4: PropTypes.string,
}

export default Hotel2Container
