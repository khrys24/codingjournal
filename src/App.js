import React from 'react'
import Journal from './components/Journal'
import Todo from './components/Todo'
import { Container, Box } from '@mui/system'
import Appbar from './components/Appbar'

const App = () => {
  return (
    <div>
      <Appbar />
      <Journal />
      <Todo />
    </div>
  )
}

export default App
