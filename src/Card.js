import React, { Component } from 'react'

class Card extends Component {
  render () {
    return (
      <div class='card'>
        <div class='card-image'>
          <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${this.props.image}.jpg`} />
        </div>
        <div class='card-content'>
          <span class='card-title activator'>{this.props.name}</span>
        </div>
      </div>
    )
  }
}

export default Card
