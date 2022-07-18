import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SearchButton from '../components/search-button'
import Hotel2Container from '../components/hotel2container'
import Footer from '../components/footer'
import './hotel-search-results.css'

const HotelSearchResults = (props) => {
  return (
    <div className="hotel-search-results-container">
      <Helmet>
        <title>Hotel Search Results - Ascenda</title>
        <meta property="og:title" content="Hotel Search Results - Ascenda" />
      </Helmet>
      <div className="hotel-search-results-top-container">
        <Header rootClassName="header-root-class-name3"></Header>
        <div className="hotel-search-results-hero">
          <div className="hotel-search-results-search-container">
            <div className="hotel-search-results-container1">
              <span className="hotel-search-results-text">Destination</span>
              <span className="hotel-search-results-text1">Start Date</span>
              <span className="hotel-search-results-text2">End Date</span>
              <span className="hotel-search-results-text3">Rooms</span>
              <span className="hotel-search-results-text4">Pax</span>
            </div>
            <div className="hotel-search-results-container2">
              <input
                type="text"
                placeholder="placeholder"
                className="hotel-search-results-textinput input"
              />
              <input
                type="text"
                placeholder="placeholder"
                className="hotel-search-results-textinput1 input"
              />
              <input
                type="text"
                placeholder="placeholder"
                className="hotel-search-results-textinput2 input"
              />
              <input
                type="text"
                placeholder="placeholder"
                className="hotel-search-results-textinput3 input"
              />
              <input
                type="text"
                placeholder="placeholder"
                className="hotel-search-results-textinput4 input"
              />
              <SearchButton rootClassName="search-button-root-class-name"></SearchButton>
            </div>
          </div>
          <div className="hotel-search-results-filter-container">
            <select className="hotel-search-results-select">
              <option value="No Preference">Amenities</option>
              <option value="1 Star">1 Star</option>
              <option value="3 Star">3 Star</option>
              <option value="2 Star">2 Star</option>
              <option value="4 Star">4 Star</option>
              <option value="5 Star">5 Star</option>
            </select>
            <select className="hotel-search-results-select1">
              <option value="No Preference">Price</option>
              <option value="Below $100">Below $100</option>
              <option value="Above $200">Above $200</option>
              <option value="$100 - $200">$100 - $200</option>
            </select>
            <select className="hotel-search-results-select2">
              <option value="This needs to be a selection">Rating</option>
              <option value="1 Star">1 Star</option>
              <option value="3 Star">3 Star</option>
              <option value="2 Star">2 Star</option>
              <option value="4 Star">4 Star</option>
              <option value="5 Star">5 Star</option>
            </select>
            <button className="hotel-search-results-button button">
              Filter
            </button>
          </div>
          <Hotel2Container></Hotel2Container>
          <Hotel2Container></Hotel2Container>
          <Hotel2Container></Hotel2Container>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default HotelSearchResults
