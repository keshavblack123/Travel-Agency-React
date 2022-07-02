import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SearchButton from '../components/search-button'
import Hotel2Container from '../components/hotel2container'
import Footer from '../components/footer'
import './hotels-page.css'

const HotelsPage = (props) => {
  return (
    <div className="hotels-page-container">
      <Helmet>
        <title>Hotels Page - Ascenda</title>
        <meta property="og:title" content="Hotels Page - Ascenda" />
      </Helmet>
      <div className="hotels-page-top-container">
        <Header rootClassName="header-root-class-name3"></Header>
        <div className="hotels-page-hero">
          <div className="hotels-page-search-container">
            <div className="hotels-page-container1">
              <span className="hotels-page-text">Destination</span>
              <span className="hotels-page-text1">Start Date</span>
              <span className="hotels-page-text2">End Date</span>
              <span className="hotels-page-text3">Rooms</span>
              <span className="hotels-page-text4">Pax</span>
            </div>
            <div className="hotels-page-container2">
              <input
                type="text"
                placeholder="placeholder"
                className="hotels-page-textinput input"
              />
              <input
                type="text"
                placeholder="placeholder"
                className="hotels-page-textinput1 input"
              />
              <input
                type="text"
                placeholder="placeholder"
                className="hotels-page-textinput2 input"
              />
              <input
                type="text"
                placeholder="placeholder"
                className="hotels-page-textinput3 input"
              />
              <input
                type="text"
                placeholder="placeholder"
                className="hotels-page-textinput4 input"
              />
              <SearchButton rootClassName="search-button-root-class-name"></SearchButton>
            </div>
          </div>
          <div className="hotels-page-filter-container">
            <select className="hotels-page-select">
              <option value="No Preference">Amenities</option>
              <option value="1 Star">1 Star</option>
              <option value="3 Star">3 Star</option>
              <option value="2 Star">2 Star</option>
              <option value="4 Star">4 Star</option>
              <option value="5 Star">5 Star</option>
            </select>
            <select className="hotels-page-select1">
              <option value="No Preference">Price</option>
              <option value="Below $100">Below $100</option>
              <option value="Above $200">Above $200</option>
              <option value="$100 - $200">$100 - $200</option>
            </select>
            <select className="hotels-page-select2">
              <option value="This needs to be a selection">Rating</option>
              <option value="1 Star">1 Star</option>
              <option value="3 Star">3 Star</option>
              <option value="2 Star">2 Star</option>
              <option value="4 Star">4 Star</option>
              <option value="5 Star">5 Star</option>
            </select>
            <button className="hotels-page-button button">Filter</button>
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

export default HotelsPage
