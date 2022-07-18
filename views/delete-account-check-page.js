import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './delete-account-check-page.css'

const DeleteAccountCheckPage = (props) => {
  return (
    <div className="delete-account-check-page-container">
      <Helmet>
        <title>Delete Account Check Page - Ascenda</title>
        <meta
          property="og:title"
          content="Delete Account Check Page - Ascenda"
        />
      </Helmet>
      <div className="delete-account-check-page-top-container">
        <Header rootClassName="header-root-class-name9"></Header>
        <div className="delete-account-check-page-hero">
          <div className="delete-account-check-page-content-container">
            <span className="delete-account-check-page-text">
              <span className="delete-account-check-page-text01">
                Are you sure you would like to delete the following account?
                This action cannot be undone.
              </span>
            </span>
            <div className="delete-account-check-page-container1">
              <span className="delete-account-check-page-text02">
                Name:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="delete-account-check-page-text03">
                First name Last Name here
              </span>
            </div>
            <div className="delete-account-check-page-container2">
              <span className="delete-account-check-page-text04">
                Registered Email:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="delete-account-check-page-text05">
                Email here
              </span>
            </div>
            <div className="delete-account-check-page-container3">
              <span className="delete-account-check-page-text06">
                Password:
              </span>
              <span className="delete-account-check-page-text07">
                Password here
              </span>
            </div>
            <div className="delete-account-check-page-container4"></div>
            <div className="delete-account-check-page-container5">
              <Link
                to="/account-info-page"
                className="delete-account-check-page-navlink button"
              >
                <span className="delete-account-check-page-text08">
                  No, Go Back to Previous Page
                </span>
              </Link>
            </div>
          </div>
          <div className="delete-account-check-page-container6"></div>
          <div className="delete-account-check-page-container7">
            <div className="delete-account-check-page-container8">
              <Link
                to="/delete-account-confirmation-page"
                className="delete-account-check-page-navlink1 button"
              >
                <span>
                  <span>Yes, Delete Account</span>
                  <span className="delete-account-check-page-text11"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name7"></Footer>
    </div>
  )
}

export default DeleteAccountCheckPage
