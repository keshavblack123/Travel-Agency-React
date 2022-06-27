import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card21.css'

const GalleryCard21 = (props) => {
  return (
    <div className={`gallery-card21-gallery-card ${props.rootClassName} `}>
      <div className="gallery-card21-container">
        <div className="gallery-card21-container1">
          <h2 className="gallery-card21-text">{props.title}</h2>
          <span className="gallery-card21-text1">{props.description}</span>
          <span className="gallery-card21-text2">SHOW MORE</span>
        </div>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card21-image"
      />
    </div>
  )
}

GalleryCard21.defaultProps = {
  image_alt: 'image',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  title: 'Project Title',
  image_src:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&h=1000',
  rootClassName: '',
}

GalleryCard21.propTypes = {
  image_alt: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default GalleryCard21
