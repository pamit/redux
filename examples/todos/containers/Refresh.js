import React from 'react'
import { connect } from 'react-redux'
import { fetchTodoList } from '../actions'

let Refresh = ({ dispatch }) => {

  return (
    <div>
        <button type="button" onClick={e => {
        e.preventDefault()
        dispatch(fetchTodoList(''))
        // alert('...')
      }}>
          Refresh
        </button>
    </div>
  )
}
Refresh = connect()(Refresh)

export default Refresh
