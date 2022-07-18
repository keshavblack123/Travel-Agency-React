import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './booking-confirmation-page.css'

const BookingConfirmationPage = (props) => {
  return (
    <div className="booking-confirmation-page-container">
      <Helmet>
        <title>Booking Confirmation Page - Ascenda</title>
        <meta
          property="og:title"
          content="Booking Confirmation Page - Ascenda"
        />
      </Helmet>
      <div className="booking-confirmation-page-top-container">
        <Header rootClassName="header-root-class-name11"></Header>
        <div className="booking-confirmation-page-hero">
          <div className="booking-confirmation-page-content-container">
            <h1 className="booking-confirmation-page-text heading">
              <span className="booking-confirmation-page-text1">
                Your booking has been processed successfully.
              </span>
              <span className="booking-confirmation-page-text2"></span>
            </h1>
            <span className="booking-confirmation-page-text3">
              <span>
                You can now view the record of this booking under your
                account&apos;s Previous Bookings Page.
              </span>
            </span>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name9"></Footer>
    </div>
  )
}

export default BookingConfirmationPage
