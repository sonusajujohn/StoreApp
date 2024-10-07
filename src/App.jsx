import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'


function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <div id='nav'>
      <Nav/>
      </div> */}
      <Nav/>
       <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
