import * as React from 'react'
import './index.css'
import Filters from '../Filters'
import InterviewQuestion from '../InterviewQuestion'

class InterviewQuestionsApp extends React.Component {
  state = {
    language: 'ALL',
    level: 'ALL',
  }

  renderHeaderSection = () => (
    <div className="header-container">
      <h1 className="header-heading">30 Seconds of Interviews</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
        alt="interview"
        className="header-image"
      />
    </div>
  )

  onChangeLanguage = language => this.setState({language})

  onChangeDifficultyLevel = level => this.setState({level})

  renderBodySection = () => {
    const {questionsData, levelsData, languageData} = this.props
    const {language, level} = this.state
    return (
      <div>
        <Filters
          levelsData={levelsData}
          languageData={languageData}
          onChangeDifficultyLevel={this.onChangeDifficultyLevel}
          onChangeLanguage={this.onChangeLanguage}
        />
        <ul className="questions-list">
          {questionsData
            .filter(
              question =>
                (question.language === language || language === 'ALL') &&
                (question.difficultyLevel === level || level === 'ALL'),
            )
            .map(question => {
              const {id} = question
              return (
                <li key={id}>
                  <InterviewQuestion question={question} />
                </li>
              )
            })}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderHeaderSection()}
        <div className="main-container">{this.renderBodySection()}</div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
