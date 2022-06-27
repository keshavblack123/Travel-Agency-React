import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LandingPage from './views/landing-page'
import HotelInfoPageAlt from './views/hotel-info-page-alt'
import Test from './views/test'
import LoginPage from './views/login-page'
import HotelInfoPage from './views/hotel-info-page'
import HotelsPage from './views/hotels-page'
import RegisterPage from './views/register-page'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={LandingPage} path="/" />
        <Route exact component={HotelInfoPageAlt} path="/hotel-info-page-alt" />
        <Route exact component={Test} path="/test" />
        <Route exact component={LoginPage} path="/login-page" />
        <Route exact component={HotelInfoPage} path="/hotel-info-page" />
        <Route exact component={HotelsPage} path="/hotels-page" />
        <Route exact component={RegisterPage} path="/register-page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
