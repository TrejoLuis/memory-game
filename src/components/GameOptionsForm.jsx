import React from 'react'

export default function GameOptionsForm () {
  return (
    <form className="game-options">
      <div className="box-form">
        <label>Saints Cloth: </label>
        <select name='saints'>
          <option value='bronze'>Bronze</option>
          <option value='silver'>Silver</option>
          <option value='gold'>Gold</option>
          <option value='mixed'>Mixed</option>
        </select>
      </div>
      <div className='box-form'>
        <label>Difficult: </label>
        <select name='difficult'>
          <option value='1'>Easy </option>
          <option value='2'>Normal </option>
          <option value='3'>Hard </option>
        </select>
      </div>
      <button type='submit'>Start</button>
    </form>
  )
}
