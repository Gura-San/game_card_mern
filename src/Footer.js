import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <footer class='page-footer'>
        <div class='container'>
          <div class='row'>
            <div class='col l6 s12'>
              <h5 class='white-text'>Please tweak me</h5>
              <p class='grey-text text-lighten-4'>Sandr00sha&co.</p>
            </div>
            <div class='col l4 offset-l2 s12' />
          </div>
        </div>
        <div class='footer-copyright'>
          <div class='container'>
      © 2018 Sandr00sha&co.
      <a class='grey-text text-lighten-4 right' href='#!'>More Links</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
