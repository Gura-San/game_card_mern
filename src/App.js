import React, { Component } from 'react'

import CardContainer from './CardContainer'
import Header from './Header'
import Footer from './Footer'
import './App.css'

const { Row, Col, CardPanel } = require('react-materialize')

class App extends Component {
  render () {
    return (
      <body class='body'>
        <Header />
        <CardContainer />
        <Footer />
      </body>
    )
  }
}

export default App
