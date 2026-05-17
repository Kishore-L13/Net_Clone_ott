import { useState } from 'react'
import './App.css'
import Body from './Component/Body'
import appStore from './Utilis/appStore'

function App() {


  return (
    <>
    <provider store={appStore}>
<Body/>
</provider>
    </>
  )
}

export default App
