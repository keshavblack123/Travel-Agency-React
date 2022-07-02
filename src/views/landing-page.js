import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SearchButton from '../components/search-button'
import Footer from '../components/footer'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Ascenda</title>
        <meta property="og:title" content="Ascenda" />
      </Helmet>
      <div className="landing-page-top-container">
        <Header rootClassName="header-root-class-name4"></Header>
        <div className="landing-page-hero">
          <div className="landing-page-content-container">
            <h1 className="heading landing-page-text">Search for a Hotel</h1>
            <div className="landing-page-container01">
              <span className="landing-page-text1">Destination</span>
              <input
                type="text"
                placeholder="placeholder"
                className="landing-page-textinput input"
              />
            </div>
            <div className="landing-page-container02">
              <div className="landing-page-container03">
                <span className="landing-page-text2">Start Date</span>
                <select className="landing-page-select">
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
              <div className="landing-page-container04">
                <span className="landing-page-text3">End Date</span>
                <select className="landing-page-select1">
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="landing-page-container05">
              <div className="landing-page-container06">
                <span className="landing-page-text4">No. of Rooms</span>
                <select className="landing-page-select2">
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
              <div className="landing-page-container07">
                <span className="landing-page-text5">Pax</span>
                <select className="landing-page-select3">
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="landing-page-container08">
              <Link to="/hotels-page" className="landing-page-navlink">
                <SearchButton
                  rootClassName="search-button-root-class-name2"
                  className="landing-page-component1"
                ></SearchButton>
              </Link>
            </div>
            <div className="landing-page-container09"></div>
            <div className="landing-page-container10"></div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default LandingPage
