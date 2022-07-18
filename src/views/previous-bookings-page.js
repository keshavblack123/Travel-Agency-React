import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './previous-bookings-page.css'

const PreviousBookingsPage = (props) => {
  return (
    <div className="previous-bookings-page-container">
      <Helmet>
        <title>Previous Bookings Page - Ascenda</title>
        <meta property="og:title" content="Previous Bookings Page - Ascenda" />
      </Helmet>
      <div className="previous-bookings-page-top-container">
        <Header rootClassName="header-root-class-name8"></Header>
        <div className="previous-bookings-page-hero">
          <div className="previous-bookings-page-content-container">
            <h1 className="heading previous-bookings-page-text">
              Previous Bookings:
            </h1>
          </div>
          <span className="previous-bookings-page-text1">Booking 1</span>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  )
}

export default PreviousBookingsPage
