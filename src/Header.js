import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <nav>
        <div class='nav-wrapper'>
          <form action='/' method='post'>
            <div class='input-field'>
              <input id='search' type='search' name='gameName' required />
              <label class='label-icon' for='search'>
                <i class='material-icons'>search</i>
              </label>
              <i class='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    )
  }
}

export default Header
