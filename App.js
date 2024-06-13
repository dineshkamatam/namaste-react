import React from 'react'
import reactDom from 'react-dom'

export default function App() {
  return (
    <div>
        <h1>sadfasd</h1>
    </div>
  )
}

const root = reactDom.createRoot(document.getElementById("root"))

root.render(<App/>)