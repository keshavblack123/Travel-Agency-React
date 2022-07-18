import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './pre-booking-login-page.css'

const PreBookingLoginPage = (props) => {
  return (
    <div className="pre-booking-login-page-container">
      <Helmet>
        <title>Pre-Booking Login Page - Ascenda</title>
        <meta property="og:title" content="Pre-Booking Login Page - Ascenda" />
      </Helmet>
      <h1 className="pre-booking-login-page-text heading">
        You are required to login before filling in the booking form
      </h1>
      <span className="pre-booking-login-page-text1">
        This will enable you to view your booking history under your account.
      </span>
      <Link to="/register-page" className="pre-booking-login-page-navlink">
        Register here
      </Link>
      <span className="pre-booking-login-page-text2">
        if you are a new user
      </span>
      <div className="pre-booking-login-page-content-container">
        <h1 className="heading pre-booking-login-page-text3">Login</h1>
        <div className="pre-booking-login-page-container1">
          <span className="pre-booking-login-page-text4">Email</span>
          <input
            type="text"
            placeholder="placeholder"
            className="pre-booking-login-page-textinput input"
          />
        </div>
        <div className="pre-booking-login-page-container2">
          <span className="pre-booking-login-page-text5">Password</span>
          <input
            type="text"
            placeholder="placeholder"
            className="pre-booking-login-page-textinput1 input"
          />
        </div>
        <div className="pre-booking-login-page-container3">
          <Link
            to="/booking-form-page"
            className="pre-booking-login-page-navlink1 button"
          >
            <span>Login</span>
          </Link>
        </div>
      </div>
      <Link
        to="/hotel-info-page"
        className="pre-booking-login-page-navlink2 button"
      >
        Go back to Previous Page
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </Link>
    </div>
  )
}

export default PreBookingLoginPage
