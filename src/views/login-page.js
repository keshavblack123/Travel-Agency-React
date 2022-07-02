import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './login-page.css'

const LoginPage = (props) => {
  return (
    <div className="login-page-container">
      <Helmet>
        <title>Login Page - Ascenda</title>
        <meta property="og:title" content="Login Page - Ascenda" />
      </Helmet>
      <div className="login-page-top-container">
        <Header rootClassName="header-root-class-name5"></Header>
        <div className="login-page-hero">
          <div className="login-page-content-container">
            <h1 className="heading login-page-text">Login</h1>
            <div className="login-page-container1">
              <span className="login-page-text1">Email</span>
              <input
                type="text"
                placeholder="placeholder"
                className="login-page-textinput input"
              />
            </div>
            <div className="login-page-container2">
              <span className="login-page-text2">Password</span>
              <input
                type="text"
                placeholder="placeholder"
                className="login-page-textinput1 input"
              />
            </div>
            <div className="login-page-container3">
              <button className="login-page-button button">
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default LoginPage
