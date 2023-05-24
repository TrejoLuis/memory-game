import React from 'react'
import PropTypes from 'prop-types'

export default function GameSettingsForm ({ onSubmitSettings }) {
  return (
    <form className="game-options" onSubmit={onSubmitSettings}>
      <div className="box-form">
        <label>Cloth: </label>
        <select name='cloth'>
          <option value='bronze'>Bronze</option>
          <option value='silver'>Silver</option>
          <option value='gold'>Gold</option>
          <option value='mixed'>Mixed</option>
        </select>
      </div>
      <div className='box-form'>
        <label>Difficult: </label>
        <select name='difficult'>
          <option value='easy'>Easy </option>
          <option value='normal'>Normal </option>
          <option value='hard'>Hard </option>
        </select>
      </div>
      <button type='submit'>Start</button>
    </form>
  )
}

GameSettingsForm.propTypes = {
  onSubmitSettings: PropTypes.func
}
