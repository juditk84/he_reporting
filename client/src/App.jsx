import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Project from './pages/project';
import Expenses from './pages/expenses';
import Personnel from './pages/personnel';
import Landing from './pages/landing';
import NavBar from './components/navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/project" element={<Project />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/personnel" element={<Personnel />} />
        </Route>
        
      </Routes>
    </div>

  )
}

export default App
