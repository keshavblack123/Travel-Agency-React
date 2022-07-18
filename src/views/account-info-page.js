import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './account-info-page.css'

const AccountInfoPage = (props) => {
  return (
    <div className="account-info-page-container">
      <Helmet>
        <title>Account Info Page - Ascenda</title>
        <meta property="og:title" content="Account Info Page - Ascenda" />
      </Helmet>
      <div className="account-info-page-top-container">
        <Header rootClassName="header-root-class-name7"></Header>
        <div className="account-info-page-hero">
          <div className="account-info-page-content-container">
            <h1 className="heading account-info-page-text">
              Account Information:
            </h1>
            <div className="account-info-page-container1">
              <span className="account-info-page-text1">
                Name:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="account-info-page-text2">
                First name Last Name here
              </span>
            </div>
            <div className="account-info-page-container2">
              <span className="account-info-page-text3">
                Registered Email:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="account-info-page-text4">Email here</span>
            </div>
            <div className="account-info-page-container3">
              <span className="account-info-page-text5">Password:</span>
              <span className="account-info-page-text6">Password here</span>
            </div>
            <Link
              to="/delete-account-confirmation-page"
              className="account-info-page-navlink"
            >
              <div className="account-info-page-container4">
                <button className="account-info-page-button button">
                  <span>Delete Account</span>
                </button>
              </div>
            </Link>
          </div>
          <div className="account-info-page-container5">
            <Link
              to="/previous-bookings-page"
              className="account-info-page-navlink1 button"
            >
              View Previous Bookings
            </Link>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default AccountInfoPage
