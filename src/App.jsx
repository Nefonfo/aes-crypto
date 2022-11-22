import {Navigate, Route, Routes} from 'react-router-dom'

import {Navbar} from './components'
import {Decrypt, Encrypt} from './pages'

import './App.css'

function App() {


  return (
      <>
          <Navbar />
          <Routes>

              <Route path='/encrypt' element={<Encrypt />} />
              <Route path='/decrypt' element={<Decrypt />} />
              <Route path='*' element={<Navigate to='/encrypt' />} />
          </Routes>
      </>
  )
}

export default App
