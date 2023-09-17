import { useState } from 'react'
import * as React from 'react'
import ReactDOM from 'react-dom/client'
import Table1 from './table1'
import './App.css'
import Table2 from './Table2'
import MinimalExample from './MinimalExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='react-table-component'>
        {/* <Table1 /> */}
      </div>
      <div className='materialui-table'>
        <p>Table2's onclick virker...</p>
        <Table2 />
        <p>MinimalExample's onclick virker ikke...</p>
        <MinimalExample />
      </div>
      <div className='tanstack-table'>

      </div>
    </>
  )
}

export default App
