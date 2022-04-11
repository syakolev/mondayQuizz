import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'

function App() {
  const {
    waiting,
    loading,
  } = useGlobalContext()

    if (waiting){
      return <SetupForm/>
    }
    if (loading){
      return <Loading/>
    }
    return <main>Monday Quiz</main>
    
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
    */
  }

export default App
