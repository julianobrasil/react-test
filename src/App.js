import { Outlet } from 'react-router-dom'
import './App.css'
import MenuBar from './components/menu-bar'

function App() {
  return <>
    <MenuBar />
    <Outlet />
  </>
}

export default App
