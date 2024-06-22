
// import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/SharedLayout/SharedLayout'
import Home from './pages/Home/Home'


function App() {
  

  return (
    
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route path='/' element={<Home/>}></Route>
        <Route path='/films' element={<h1>Films</h1>}></Route>
          <Route path='*' element={<h1>Not Found</h1>}></Route>
          </Route>
      </Routes>
     </div>
  )
}

export default App