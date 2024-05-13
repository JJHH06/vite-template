import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DemoComponent from './DemoComponent'
import MyForm from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Router>
          <Routes>
            <Route path="/about" element={<MyForm />}/>
            <Route path="/" element={<DemoComponent/>}/>
          </Routes>
        </Router>
      </div>
  )
}

export default App
