import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Tab, Tabs } from 'react-bootstrap'
import { useState, useEffect } from 'react'

export default function home() {

  const [key, setKey] = useState();
  const navigate = useNavigate();

  

    
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => navigate(`/${k}`)}
        className="mb-3">

        <Tab eventKey="project" title="Project Summary">
          <Outlet />
        </Tab>
        <Tab eventKey="expenses" title="Expenses">
          <Outlet />
        </Tab>
        <Tab eventKey="personnel" title="Personnel">
          <Outlet />
        </Tab>
      </Tabs>
    </div>
  )
}
