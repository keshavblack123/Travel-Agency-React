import React from 'react'
import { Field, useFormik } from "formik";
import { useContext, useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './login-page.css'
import { AccountContext } from "./context";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormError,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

const LoginPage = (props) => {
  //const { switchToSignup } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const history = useHistory();

  function handleClick() {
    history.push("/account-info-page");
  }

  const onSubmit = async (values) => {
    setError(null);
    const response = await axios
      .post("http://localhost:5000/api/v1/login", values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
      });

    if (response) {
      alert("Welcome back in. Authenticating...");
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <BoxContainer>
    <FormError>{error ? error : ""}</FormError>
    <FormContainer onSubmit={formik.handleSubmit}></FormContainer>
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
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="login-page-textinput input"
              />
              {
              <FieldError>
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""}
              </FieldError>
              }
            </div>
            <div className="login-page-container2">
              <span className="login-page-text2">Password</span>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="login-page-textinput1 input"
              />
              {
              <FieldError>
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""}
              </FieldError>
              
              }
            </div>
            <div className="login-page-container3">
              <SubmitButton type="submit" onClick={handleClick} disabled={!formik.isValid}>
                Login
              </SubmitButton>  
            </div>
            <div className="login page-container4">
              <Link to="/register-page" className="login page-navlink">
                New user? Click here to register
              </Link>
            </div>
            
            
            
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
    </BoxContainer>
  )
}

export default LoginPage
