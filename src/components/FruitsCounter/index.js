// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1>
            Bob ate <span>{mangoes}</span> mangoes{' '}
            <span>{bananas} Bananas</span>{' '}
          </h1>
          <div className="img-container">
            <div className="item">
              <img
                alt="mango"
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button onClick={this.eatMango} className="button" type="button">
                Eat Mango
              </button>
            </div>
            <div className="item">
              <img
                alt="banana"
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button onClick={this.eatBanana} className="button" type="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
