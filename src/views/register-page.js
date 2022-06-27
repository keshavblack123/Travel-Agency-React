import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './register-page.css'

const RegisterPage = (props) => {
  return (
    <div className="register-page-container">
      <Helmet>
        <title>Register Page - Travel Agency</title>
        <meta property="og:title" content="Register Page - Travel Agency" />
      </Helmet>
      <div className="register-page-top-container">
        <Header rootClassName="header-root-class-name6"></Header>
        <div className="register-page-hero">
          <div className="register-page-content-container">
            <h1 className="register-page-text heading">Register New User</h1>
            <div className="register-page-container01">
              <div className="register-page-container02">
                <span className="register-page-text1">First Name</span>
                <input
                  type="text"
                  placeholder="placeholder"
                  className="register-page-textinput input"
                />
              </div>
              <div className="register-page-container03">
                <span className="register-page-text2">Last Name</span>
                <input
                  type="text"
                  placeholder="placeholder"
                  className="register-page-textinput1 input"
                />
              </div>
            </div>
            <div className="register-page-container04">
              <span className="register-page-text3">Email</span>
              <input
                type="text"
                placeholder="placeholder"
                className="register-page-textinput2 input"
              />
            </div>
            <div className="register-page-container05">
              <div className="register-page-container06">
                <span className="register-page-text4">Password</span>
                <input
                  type="text"
                  placeholder="placeholder"
                  className="register-page-textinput3 input"
                />
              </div>
              <div className="register-page-container07">
                <span className="register-page-text5">Re-enter Password</span>
                <input
                  type="text"
                  placeholder="placeholder"
                  className="register-page-textinput4 input"
                />
              </div>
            </div>
            <div className="register-page-container08">
              <button className="register-page-button button">
                <span>Register</span>
              </button>
            </div>
            <div className="register-page-container09"></div>
            <div className="register-page-container10"></div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default RegisterPage
