import { useState } from 'react'
import './App.css'
import Body from './Component/Body'
import appStore from './Utilis/appStore'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
    <Provider store={appStore}>
<Body/>
</Provider>
    </>
  )
}

export default App
