
import './App.css'
import Coursedetails from './pages/Coursedetails'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'


function App() {


  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/coursedetails/" element={ <Coursedetails/>}>    </Route>
    </Routes>
     
    </div>
  )
}

export default App
