import React, { useEffect, useState } from 'react'
import {AgGridReact} from 'ag-grid-react'

import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

export default function project({activeProject}) {

  const GridExample = () => {
    // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([]);
  
  useEffect(() => {
    activeProject && setRowData([activeProject])
  }, [])

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "CE_code", editable: true, cellClass: "blue_cell", rowDrag: true },
    { field: "internal_code" },
    { field: "start_date" },
    { field: "end_date" },
    { field: "id" },
    { field: "grant_total" },
    { field: "createdAt" },
    { field: "updatedAt" },
    
  ]);
      
    return (<div className="ag-theme-quartz" style={{ height: 500 }}>
    {/* The AG Grid component */}
    <AgGridReact rowData={rowData} columnDefs={colDefs} />
  </div>)
    
  }

  return (
    <div>
      
      {activeProject ? <GridExample /> : <p>please choose a project from the dropdown list.</p>}
    
    </div>
  )
}
