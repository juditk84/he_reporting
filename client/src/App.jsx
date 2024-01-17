import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Project from './pages/project';
import Expenses from './pages/expenses';
import Personnel from './pages/personnel';
import Landing from './pages/landing';
import NavBar from './components/navbar';

function App() {

  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState();

    useEffect(() => {
      getUsersProjects();
    }, [])

    async function getUsersProjects() {
        try {
          const response = await fetch(`api/projects`);
          if (!response.ok) {
            throw new Error("Oops, something went wrong");
          }
          console.log(response)
          const data = await response.json();
          console.log(data)

          setProjects(data);
        
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <div>
      <NavBar projects={projects} activeProject={activeProject} setActiveProject={setActiveProject} />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/project" element={<Project activeProject={activeProject} />} />
          <Route path="/expenses" element={<Expenses activeProject={activeProject} />} />
          <Route path="/personnel" element={<Personnel />} />
        </Route>
        
      </Routes>
    </div>

  )
}

export default App
