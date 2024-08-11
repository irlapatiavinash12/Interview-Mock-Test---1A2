import './index.css'

import {Component} from 'react'

class Greeting extends Component {
  state = {
    activeTab: this.props.languageGreetingsList[0],
    activeLanguage: this.props.languageGreetingsList[0].imageAltText,
  }

  onChangeTrigger = data => {
    this.setState({activeTab: data, activeLanguage: data.imageAltText})
  }

  render() {
    const {languageGreetingsList} = this.props
    const {activeTab, activeLanguage} = this.state
    console.log(languageGreetingsList)
    console.log(activeLanguage, activeTab)
    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="title-text">Multilingual Greetings</h1>
          <ul className="unordered-list-styling">
            {languageGreetingsList.map(eachItem => (
              <li className="list-item-styling" key={eachItem.id}>
                <button
                  type="button"
                  className={
                    activeLanguage === eachItem.imageAltText
                      ? 'active-button-styling'
                      : 'button-styling'
                  }
                  onClick={() => this.onChangeTrigger(eachItem)}
                >
                  {eachItem.buttonText}
                </button>
              </li>
            ))}
          </ul>
          <img
            src={activeTab.imageUrl}
            alt={activeTab.imageAltText}
            className="image-styling"
          />
        </div>
      </div>
    )
  }
}

export default Greeting
