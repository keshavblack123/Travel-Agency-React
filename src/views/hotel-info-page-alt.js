import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './hotel-info-page-alt.css'

const HotelInfoPageAlt = (props) => {
  return (
    <div className="hotel-info-page-alt-container">
      <Helmet>
        <title>Hotel Info Page Alt - Travel Agency</title>
        <meta
          property="og:title"
          content="Hotel Info Page Alt - Travel Agency"
        />
      </Helmet>
      <div className="hotel-info-page-alt-top-container">
        <Header rootClassName="header-root-class-name2"></Header>
        <div className="hotel-info-page-alt-hero">
          <div className="hotel-info-page-alt-container1">
            <button className="hotel-info-page-alt-button button">
              <span className="hotel-info-page-alt-text">&lt;</span>
            </button>
            <button className="hotel-info-page-alt-button1 button">
              <span className="hotel-info-page-alt-text1">
                <span>&gt;</span>
                <span className="hotel-info-page-alt-text3">&amp;#8203;</span>
              </span>
            </button>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxob3RlbCUyMHJvb218ZW58MHx8fHwxNjU1NzQ1MDc2&amp;ixlib=rb-1.2.1&amp;w=600"
            className="hotel-info-page-alt-image"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default HotelInfoPageAlt
