import React from 'react'

export default function project({activeProject}) {
  return (
    <div>
      {activeProject ? activeProject.CE_code : <p>please choose a project from the dropdown list.</p>}
    </div>
  )
}
