import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { Field, useFormik } from "formik";
import { useContext, useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { AccountContext } from "./context";

import { Helmet } from 'react-helmet'
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormSuccess,
  Input,
  MutedLink,
  SubmitButton,
  FormError,
} from "./common";

import Header from '../components/header'
import Footer from '../components/footer'
import './register-page.css'

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

const validationSchema = yup.object({
  fullName: yup
    .string()
    .min(3, "Please enter you real name")
    .required("Full name is required!"),
  email: yup.string().email("Please enter a valid email address").required(),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Password must consist of 8 characters, at least 1 letter and 1 number")
    .required(),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Password does not match"),
    }),
});

const RegisterPage = (props) => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  function handleClick() {
    history.push("/registration-confirmation-page");
  }

  const onSubmit = async (values) => {
    const { confirmPassword, ...data } = values;
    
  
    
    const response = await axios
      .post("http://localhost:5000/api/v1/register", data)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        setSuccess(null);
      });

    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
      
      
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  console.log("Error", error);
  return (
    <BoxContainer>
      {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
      {!success && <FormError>{error ? error : ""}</FormError>}
      <FormContainer onSubmit={formik.handleSubmit}></FormContainer>
      <div className="register-page-container">
        <Helmet>
          <title>Register Page - Ascenda</title>
          <meta property="og:title" content="Register Page - Ascenda" />
        </Helmet>
        <div className="register-page-top-container">
          <Header rootClassName="header-root-class-name6"></Header>
          <div className="register-page-hero">
            <div className="register-page-content-container">
              <h1 className="register-page-text heading">
                Register as a New User
              </h1>

              <div className="register-page-container1">
                <span className="register-page-text1">Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="register-page-textinput input"
                />
                <FieldError>
                  {formik.touched.fullName && formik.errors.fullName
                    ? formik.errors.fullName
                    : ""}
                </FieldError>
              </div>

              <div className="register-page-container2">
                <span className="register-page-text2">Email</span>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="register-page-textinput1 input"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FieldError>
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""}
                </FieldError>
                
              </div>
              <div className="register-page-container3">
                <div className="register-page-container4">
                  <span className="register-page-text3">Password</span>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="register-page-textinput2 input"
                  />
                  <FieldError>
                    {formik.touched.password && formik.errors.password
                      ? formik.errors.password
                      : ""}
                  </FieldError>
                </div>
              
                <div className="register-page-container5">
                  <span className="register-page-text4">Re-enter Password</span>
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="register-page-textinput3 input"
                  />
                  <FieldError>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword
                      ? formik.errors.confirmPassword
                      : ""}
                  </FieldError>
                </div>
              
              <div className="register-page-container6"> 
                <SubmitButton type="submit" onClick={handleClick} disabled={!formik.isValid}>Signup</SubmitButton>
              </div>
            </div>
          
          
                
              
              <div className="register-page-container7"></div>
              <div className="register-page-container8"></div>
            </div>
          </div>
        </div>
        
        
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
      
    </BoxContainer>  
  );
}

export default RegisterPage
