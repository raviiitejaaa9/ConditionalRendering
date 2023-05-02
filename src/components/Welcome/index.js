// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: 0}

  onButtonClick = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      this.setState(prevState => ({
        isSubscribed: prevState.isSubscribed + 1,
      }))
    }
    this.setState(prevState => ({
      isSubscribed: prevState.isSubscribed + 1,
    }))
  }

  subscription = () => {
    const {isSubscribed} = this.state

    if (isSubscribed % 2 !== 0) {
      return (
        <button type="button" onClick={this.onButtonClick} className="button">
          Subscribed
        </button>
      )
    }

    return (
      <button type="button" onClick={this.onButtonClick} className="button">
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="head"> Welcome </h1>
        <p className="para"> Thank you! Happy Learning </p>
        {this.subscription()}
      </div>
    )
  }
}

export default Welcome
