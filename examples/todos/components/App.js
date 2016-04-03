import React from 'react'
import Footer from './Footer'
import Refresh from '../containers/Refresh'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Refresh />
  </div>
)

export default App
