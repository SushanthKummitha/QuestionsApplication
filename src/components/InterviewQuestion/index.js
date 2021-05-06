import * as React from 'react'
import './index.css'

const UP_ARROW = 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
const DOWN_ARROW = 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'

class InterviewQuestion extends React.Component {
  state = {
    showAnswer: false,
  }

  toggleAnswer = () => {
    this.setState(prevState => ({showAnswer: !prevState.showAnswer}))
  }

  render() {
    const {question} = this.props
    const {questionText, answerText, language, difficultyLevel} = question
    const {showAnswer} = this.state
    const buttonText = showAnswer ? 'Hide' : 'Show'
    const buttonArrowAltText = showAnswer ? 'up arrow' : 'down arrow'
    const buttonArrowUrl = showAnswer ? UP_ARROW : DOWN_ARROW
    return (
      <div className="question-container">
        <p>
          <span className="filter">{language}</span>
          <span className="filter">{difficultyLevel}</span>
        </p>
        <h1 className="question-heading">{questionText}</h1>
        <button type="button" className="button" onClick={this.toggleAnswer}>
          {buttonText}
          <img
            src={buttonArrowUrl}
            alt={buttonArrowAltText}
            className="arrow"
          />
        </button>
        {showAnswer && <p>{answerText}</p>}
      </div>
    )
  }
}

export default InterviewQuestion
