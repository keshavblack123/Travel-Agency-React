import React from 'react'
import { Link } from 'react-router-dom'
import { Field, useFormik } from "formik";
import { useContext, useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from 'react-router-dom';

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

import './booking-form-page.css'

const EXPIRYDATE_REGEX = /(0[1-9]|1[0-2])\/[0-9]{2}/;

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(1, "Please enter your first name")
    .required("First name is required!"),
  lastName: yup
    .string()
    .min(1, "Please enter your last name")
    .required("Last name is required!"),
  phoneNo: yup
    .string()
    .min(8, "Please enter your phone number")
    .required("Phone number is required!"),
  emailAddr: yup.string().email("Please enter a valid email address").required("Email Address is required!"),
  specialReq: yup.string(),
  creditCardNo: yup
    .string()
    .min(16, "Please enter your credit card number")
    .required("Credit card number is required!"),
  creditCardDate: yup
    .string()
    .matches(EXPIRYDATE_REGEX, "Please enter a valid credit card expiry date")
    .required("Credit card expiry date is required!"),
  cvv: yup
    .string()
    .min(3, "Please enter your CVV/CVC")
    .required("CVV/CVC is required!"),
  billingAddr: yup
    .string()
    .min(5, "Please enter your billing address")
    .required("Billing Address is required!"),
  
    })


const BookingFormPage = (props) => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const history = useHistory();

  function handleClick() {
    history.push("/booking-confirmation-page");
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
      firstName: "",
      lastName: "",
      phoneNo: "",
      emailAddr: "",
      specialReq: "",
      creditCardNo: "",
      creditCardDate: "",
      cvv: "",
      billingAddr: "",
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
      <div className="booking-form-page-container">
        <Helmet>
          <title>Booking Form Page - Ascenda</title>
          <meta property="og:title" content="Booking Form Page - Ascenda" />
        </Helmet>
        <h1 className="booking-form-page-text heading">Booking Form</h1>
        <div className="booking-form-page-container01">
          <span className="booking-form-page-text01">First Name</span>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="booking-form-page-textinput input"
          />
          <FieldError>
            {formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : ""}
          </FieldError>
        </div>
        <div className="booking-form-page-container02">
          <span className="booking-form-page-text02">Last Name</span>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="booking-form-page-textinput1 input"
          />
          <FieldError>
            {formik.touched.lastName && formik.errors.lastName
              ? formik.errors.lastName
              : ""}
          </FieldError>
        </div>
        <div className="booking-form-page-container03">
          <span className="booking-form-page-text03">Phone Number</span>
          <input
            type="text"
            name="phoneNo"
            placeholder="Phone Number"
            value={formik.values.phoneNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="booking-form-page-textinput2 input"
          />
          <FieldError>
            {formik.touched.phoneNo && formik.errors.phoneNo
              ? formik.errors.phoneNo
              : ""}
          </FieldError>          
        </div>
        <div className="booking-form-page-container04">
          <span className="booking-form-page-text04">Email Address</span>
          <input
            type="text"
            name="emailAddr"
            placeholder="Email Address"
            value={formik.values.emailAddr}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="booking-form-page-textinput3 input"
          />
          <FieldError>
            {formik.touched.emailAddr && formik.errors.emailAddr
              ? formik.errors.emailAddr
              : ""}
          </FieldError>   
        </div>
        <div className="booking-form-page-container05">
          <span className="booking-form-page-text05">
            Special Requests to Hotel
          </span>
          <input
            type="text"
            name="specialReq"
            placeholder="Special Requests to Hotel"
            value={formik.values.specialReq}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}            
            className="booking-form-page-textinput4 input"
          />
          <FieldError>
            {formik.touched.specialReq && formik.errors.specialReq
              ? formik.errors.specialReq
              : ""}
          </FieldError>             
        </div>
        <div className="booking-form-page-container06">
          <span className="booking-form-page-text06">
            <span>Credit Card Number</span>
          </span>
          <input
            type="text"
            name="creditCardNo"
            placeholder="Credit Card Number"
            value={formik.values.creditCardNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}                     
            className="booking-form-page-textinput5 input"
          />
          <FieldError>
            {formik.touched.creditCardNo && formik.errors.creditCardNo
              ? formik.errors.creditCardNo
              : ""}
          </FieldError>               
        </div>
        <div className="booking-form-page-container07">
          <span className="booking-form-page-text08">
            <span>Credit Card Expiry Date</span>
          </span>
          <input
            type="text"
            name="creditCardDate"
            placeholder="Credit Card Expiry Date"
            value={formik.values.creditCardDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}               
            className="booking-form-page-textinput6 input"
          />
          <FieldError>
            {formik.touched.creditCardDate && formik.errors.creditCardDate
              ? formik.errors.creditCardDate
              : ""}
          </FieldError>                    
        </div>
        <div className="booking-form-page-container08">
          <span className="booking-form-page-text10">
            <span>CVV/CVC</span>
          </span>
          <input
            type="text"
            name="cvv"
            placeholder="CVV/CVC"
            value={formik.values.cvv}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}    
            className="booking-form-page-textinput7 input"
          />
          <FieldError>
            {formik.touched.cvv && formik.errors.cvv
              ? formik.errors.cvv
              : ""}
          </FieldError>     

        </div>
        <div className="booking-form-page-container09">
          <span className="booking-form-page-text12">Billing Address</span>
          <input
            type="text"
            name="billingAddr"
            placeholder="Billing Address"
            value={formik.values.billingAddr}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}    
            className="booking-form-page-textinput8 input"
          />
          <FieldError>
            {formik.touched.billingAddr && formik.errors.billingAddr
              ? formik.errors.billingAddr
              : ""}
          </FieldError>     
        </div>
        <div className="booking-form-page-container10">
          <SubmitButton type="submit" onClick={handleClick} disabled={!formik.isValid}>
            Submit 
          </SubmitButton>
          
        </div>
      </div>
    </BoxContainer> 
  )
}

export default BookingFormPage
