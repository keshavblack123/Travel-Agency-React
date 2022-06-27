import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Navbar from '../components/navbar'
import SearchButton from '../components/search-button'
import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <Helmet>
        <title>Test - Travel Agency</title>
        <meta property="og:title" content="Test - Travel Agency" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div className="test-container01">
        <div className="test-content-container">
          <h1 className="heading test-text">Search for a Hotel</h1>
          <span className="test-text01">Destination</span>
          <input
            type="text"
            placeholder="placeholder"
            className="test-textinput input"
          />
          <div className="test-container02">
            <span className="test-text02">Start Date</span>
            <span className="test-text03">End Date</span>
          </div>
          <div className="test-container03">
            <div className="test-container04">
              <input
                type="text"
                placeholder="placeholder"
                className="test-textinput01 input"
              />
              <input
                type="text"
                placeholder="placeholder"
                className="test-textinput02 input"
              />
            </div>
          </div>
          <div className="test-container05">
            <span className="test-text04">No. of Rooms</span>
            <span className="test-text05">Pax</span>
          </div>
          <div className="test-container06">
            <input
              type="text"
              placeholder="placeholder"
              className="test-textinput03 input"
            />
            <input
              type="text"
              placeholder="placeholder"
              className="test-textinput04 input"
            />
          </div>
          <div className="test-container07">
            <SearchButton></SearchButton>
          </div>
        </div>
      </div>
      <div className="test-container08">
        <div className="test-content-container1">
          <h1 className="heading test-text06">Search for a Hotel</h1>
          <div className="test-container09">
            <span className="test-text07">Destination</span>
            <input
              type="text"
              placeholder="placeholder"
              className="test-textinput05 input"
            />
          </div>
          <div className="test-container10">
            <div className="test-container11">
              <span className="test-text08">Start Date</span>
              <input
                type="text"
                placeholder="placeholder"
                className="test-textinput06 input"
              />
            </div>
            <div className="test-container12">
              <span className="test-text09">End Date</span>
              <input
                type="text"
                placeholder="placeholder"
                className="test-textinput07 input"
              />
            </div>
          </div>
          <div className="test-container13">
            <div className="test-container14">
              <span className="test-text10">No. of Rooms</span>
              <input
                type="text"
                placeholder="placeholder"
                className="test-textinput08 input"
              />
            </div>
            <div className="test-container15">
              <span className="test-text11">Pax</span>
              <input
                type="text"
                placeholder="placeholder"
                className="test-textinput09 input"
              />
            </div>
          </div>
          <div className="test-container16">
            <SearchButton rootClassName="search-button-root-class-name1"></SearchButton>
          </div>
          <div className="test-container17"></div>
          <div className="test-container18"></div>
        </div>
      </div>
    </div>
  )
}

export default Test
