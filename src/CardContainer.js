import React, { Component } from 'react'
import Axios from 'axios'
import Card from './Card'

class CardContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: [],
      newCard: null
    }
  }

  componentDidMount () {
    Axios
      .get('http://localhost:4000/user/gameboard')
      .then((data) => {
        console.log(data.data.body)
        this.setState({cards: data.data.body})
      })
  }

  cardInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = e => {
    let _ = this.state.newCard
    console.log(this.state.newCard)
      Axios
      .put('http://localhost:4000/add/'+_, {})
      .then((res) => {
        console.log(res)
        this.setState({cards: [...this.state.cards, res.data.upserted]})
      })  


  }

  render () {
    let _ = this.state
    // this.state.cards.map //then return a Card component from map callback
    let cards = this.state.cards.map((card, index) => (
      <Card
        key={index}
        name={card.name}
      />
    ))
    return (
      <div>
        {cards}

        <div className='form'>
          <h1>Add card</h1>
          <input type='number' name='newCard' value={_.newCard} onChange={e => this.cardInput(e)} placeholder='Enter Card ID' />
          <input type='button' value='submit' onClick={() => this.submit()} />
          <h3>{this.message}</h3>
        </div>
      </div>
    )
  }
}

export default CardContainer
