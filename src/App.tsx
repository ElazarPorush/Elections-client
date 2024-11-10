import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Login from './components/auth/login'
import Register from './components/auth/register'
import Votes from './components/pages/Votes'
import Statistics from './components/pages/Statistics'

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='votes' element={<Votes/>} />
        <Route path='statistics' element={<Statistics/>} />
      </Routes>
    </div>
  )
}
