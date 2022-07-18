import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './delete-account-confirmation-page.css'

const DeleteAccountConfirmationPage = (props) => {
  return (
    <div className="delete-account-confirmation-page-container">
      <Helmet>
        <title>Delete Account Confirmation Page - Ascenda</title>
        <meta
          property="og:title"
          content="Delete Account Confirmation  Page - Ascenda"
        />
      </Helmet>
      <div className="delete-account-confirmation-page-top-container">
        <Header rootClassName="header-root-class-name10"></Header>
        <div className="delete-account-confirmation-page-hero">
          <div className="delete-account-confirmation-page-content-container">
            <h1 className="delete-account-confirmation-page-text heading">
              <span className="delete-account-confirmation-page-text1">
                Your account has been deleted
              </span>
              <br></br>
              <span className="delete-account-confirmation-page-text3">
                successfully.
              </span>
              <span className="delete-account-confirmation-page-text4"></span>
            </h1>
            <span className="delete-account-confirmation-page-text5">
              <span>
                Your profile information and records of previous bookings made
              </span>
              <br></br>
              <span>under your account have been erased from our system.</span>
            </span>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name8"></Footer>
    </div>
  )
}

export default DeleteAccountConfirmationPage
