import {Component} from 'react'
import './App.css'

import TabItem from './TabItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  activeBtn = id => {
    this.setState({activeTabId: id})
  }

  renderSelectedImage = () => {
    const {activeTabId} = this.state
    const {imageUrl, imageAltText} = languageGreetingsList[
      languageGreetingsList.findIndex(each => each.id === activeTabId)
    ]
    return <img src={imageUrl} alt={imageAltText} className="img" />
  }

  render() {
    const {activeTabId} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="unorder">
          {languageGreetingsList.map(each => (
            <TabItem
              buttonDetails={each}
              key={each.id}
              isActive={activeTabId === each.id}
              activeBtn={this.activeBtn}
            />
          ))}
        </ul>
        {this.renderSelectedImage()}
      </div>
    )
  }
}

export default App
