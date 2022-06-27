import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Room2Container from '../components/room2container'
import Footer from '../components/footer'
import './hotel-info-page.css'

const HotelInfoPage = (props) => {
  return (
    <div className="hotel-info-page-container">
      <Helmet>
        <title>Hotel Info Page - Travel Agency</title>
        <meta property="og:title" content="Hotel Info Page - Travel Agency" />
      </Helmet>
      <div className="hotel-info-page-top-container">
        <Header rootClassName="header-root-class-name1"></Header>
        <div className="hotel-info-page-gallery">
          <div className="hotel-info-page-container01">
            <div className="hotel-info-page-container02">
              <div className="hotel-info-page-container03">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1631049552057-403cdb8f0658?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxob3RlbCUyMHJvb218ZW58MHx8fHwxNjU1NzQ1MDc2&amp;ixlib=rb-1.2.1&amp;q=80&amp;h=700"
                  className="hotel-info-page-image"
                />
              </div>
              <div className="hotel-info-page-container04">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxob3RlbCUyMHJvb218ZW58MHx8fHwxNjU1NzQ1MDc2&amp;ixlib=rb-1.2.1&amp;q=80&amp;h=700"
                  className="hotel-info-page-image1"
                />
              </div>
            </div>
            <div className="hotel-info-page-container05">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb29sfGVufDB8fHx8MTY1NTc0OTk2NQ&amp;ixlib=rb-1.2.1&amp;q=80&amp;h=700"
                className="hotel-info-page-image2"
              />
            </div>
          </div>
          <div className="hotel-info-page-container06">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxob3RlbCUyMHJvb218ZW58MHx8fHwxNjU1NzQ1MDc2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1100"
              className="hotel-info-page-image3"
            />
          </div>
        </div>
        <div className="hotel-info-page-container07">
          <button className="hotel-info-page-button button">Overview</button>
          <button className="hotel-info-page-button1 button">Rooms</button>
          <button className="hotel-info-page-button2 button">Amenities</button>
          <button className="hotel-info-page-button3 button">Map</button>
          <button className="hotel-info-page-button4 button">Review</button>
        </div>
        <div className="hotel-info-page-container08">
          <h1>Overview</h1>
          <span>Information about the Hotel...</span>
        </div>
        <div className="hotel-info-page-container09">
          <h1 className="hotel-info-page-text02">Rooms</h1>
          <Room2Container></Room2Container>
          <Room2Container></Room2Container>
          <div className="hotel-info-page-room-container">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="hotel-info-page-image4"
            />
            <div className="hotel-info-page-container10">
              <span></span>
              <h1 className="hotel-info-page-text04">Room Name</h1>
              <span>Price</span>
              <span>Pax Allowable</span>
            </div>
            <button className="hotel-info-page-button5 button">
              <span className="hotel-info-page-text07">
                <span>Book</span>
              </span>
            </button>
          </div>
        </div>
        <div className="hotel-info-page-container11">
          <h1>Amenities</h1>
          <span>Information about the Hotel...</span>
        </div>
        <div className="hotel-info-page-container12">
          <h1>Map</h1>
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="hotel-info-page-image5"
          />
        </div>
        <div className="hotel-info-page-container13">
          <h1>Reviews</h1>
          <div className="hotel-info-page-container14">
            <span>Person Name</span>
            <span>Rating</span>
            <span className="hotel-info-page-text15">Review...</span>
          </div>
          <div className="hotel-info-page-container15">
            <span>Person Name</span>
            <span>Rating</span>
            <span className="hotel-info-page-text18">Review...</span>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default HotelInfoPage
