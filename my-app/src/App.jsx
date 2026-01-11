import Button from 'react-bootstrap/esm/Button'
import './App.scss'
import Header from './components/header/Header'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <button><Link to="/users">Users</Link></button>
      <button><Link to="/admin">Admin</Link></button>
    </>
  )
}

export default App
