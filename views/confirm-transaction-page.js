import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './confirm-transaction-page.css'

const ConfirmTransactionPage = (props) => {
  return (
    <div className="confirm-transaction-page-container">
      <Helmet>
        <title>Confirm Transaction Page - Ascenda</title>
        <meta
          property="og:title"
          content="Confirm Transaction Page - Ascenda"
        />
      </Helmet>
      <div className="confirm-transaction-page-content-container">
        <h1 className="confirm-transaction-page-text heading">
          Would you like to confirm the transaction?
        </h1>
        <span className="confirm-transaction-page-text1">
          Payment will be made automatically once you click yes.
        </span>
      </div>
      <div className="confirm-transaction-page-container1">
        <Link
          to="/booking-confirmation-page"
          className="confirm-transaction-page-navlink button"
        >
          Yes, Confirm Transaction
        </Link>
      </div>
      <div className="confirm-transaction-page-container2">
        <Link
          to="/booking-form-page"
          className="confirm-transaction-page-navlink1 button"
        >
          No, Go Back to Previous Page
        </Link>
      </div>
    </div>
  )
}

export default ConfirmTransactionPage
