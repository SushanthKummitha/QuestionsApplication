/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react'
import './index.css'

class Filters extends React.Component {
  render() {
    const {
      levelsData,
      languageData,
      onChangeDifficultyLevel,
      onChangeLanguage,
    } = this.props
    return (
      <div className="filters-container">
        <div className="filter-container">
          <label className="label">LANGUAGE</label>
          <select
            defaultValue="ALL"
            onChange={e => onChangeLanguage(e.target.value)}
          >
            {languageData.map(item => {
              const {id, language} = item
              return (
                <option key={id} value={language}>
                  {language}
                </option>
              )
            })}
          </select>
        </div>
        <div className="filter-container">
          <label className="label">DIFFICULTY LEVEL</label>
          <select
            defaultValue="ALL"
            onChange={e => onChangeDifficultyLevel(e.target.value)}
          >
            {levelsData.map(item => {
              const {id, level} = item
              return (
                <option key={id} value={level}>
                  {level}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    )
  }
}

export default Filters
