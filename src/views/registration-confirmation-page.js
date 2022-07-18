import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './registration-confirmation-page.css'

const RegistrationConfirmationPage = (props) => {
  return (
    <div className="registration-confirmation-page-container">
      <Helmet>
        <title>Registration Confirmation Page - Ascenda</title>
        <meta
          property="og:title"
          content="Registration Confirmation Page - Ascenda"
        />
      </Helmet>
      <div className="registration-confirmation-page-top-container">
        <Header rootClassName="header-root-class-name12"></Header>
        <div className="registration-confirmation-page-hero">
          <div className="registration-confirmation-page-content-container">
            <h1 className="registration-confirmation-page-text heading">
              Your account has been registered successfully.
            </h1>
            <span className="registration-confirmation-page-text1">
              Login to your account now to make a new booking or view previous
              bookngs.
            </span>
            <div className="registration-confirmation-page-container1">
              <Link
                to="/login-page"
                className="registration-confirmation-page-navlink button"
              >
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name10"></Footer>
    </div>
  )
}

export default RegistrationConfirmationPage
