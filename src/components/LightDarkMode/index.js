import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

  modeBtn = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const message = isDarkMode ? 'Light Mode' : 'Dark Mode'

    const classNameCard = `card-container ${modeClassName}`
    return (
      <div className="main-container">
        <div className={classNameCard}>
          <h1 className="heading">Click To Change Mode</h1>
          <div className="btn-container">
            <button className="button" onClick={this.modeBtn} type="button">
              {message}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
