import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  startTimer = () => {
    this.timerId = setInterval(this.updateTime, 1000)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    this.setState({timeElapsedInSeconds: 0})
    clearInterval(this.timerId)
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="stopwatch-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-card">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="timer"
            />
            <h1 className="card-heading" testid="timer">
              Timer
            </h1>
          </div>
          <h1 className="timer">{time}</h1>
          <div className="button-container">
            <button
              type="button"
              className="button green"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="button red"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button yellow"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
