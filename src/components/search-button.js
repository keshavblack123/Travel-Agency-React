import React from 'react'

import PropTypes from 'prop-types'

import './search-button.css'

const SearchButton = (props) => {
  return (
    <div className={`search-button-container ${props.rootClassName} `}>
      <button className="search-button-button button">
        <span className="">
          <span className="">Search</span>
          <span className="search-button-text2"></span>
        </span>
      </button>
    </div>
  )
}

SearchButton.defaultProps = {
  rootClassName: '',
}

SearchButton.propTypes = {
  rootClassName: PropTypes.string,
}

export default SearchButton
