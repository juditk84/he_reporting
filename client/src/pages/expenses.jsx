import React from 'react'
import { useState, useEffect } from 'react';
import {AgGridReact} from 'ag-grid-react'

import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme


export default function expenses({activeProject}) {

  const [periodsWithExpenses, setPeriodsWithExpenses] = useState([]);

  useEffect(() => {
    getProjectPeriodsAndExpenses()
  }, [activeProject])

  async function getProjectPeriodsAndExpenses() {
    try {
      const response = await fetch(`api/${activeProject.id}/periods`);
      if (!response.ok) {
        throw new Error("Oops, something went wrong");
      }

      const data = await response.json();
      setPeriodsWithExpenses(data);
    
    } catch (error) {
      console.log(error);
    }
  }

  function handlePeriodSelect(e){
    console.log("period changed to", e.target.value)
    setRowData(periodsWithExpenses[1].Expenses)
    
  }

  const GridForExpenses = () => {
    // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([]);
  
  useEffect(() => {
    periodsWithExpenses.length && setRowData(periodsWithExpenses[0].Expenses)
  }, [])

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([

    { field: "id"},
    { field: "type"},
    { field: "inv_reference" },
    { field: "internal_reference" },
    { field: "inv_date" },
    { field: "payment_date" },
    { field: "amount" },
    { field: "createdAt" },
    { field: "updatedAt" },
    { field: "SupplierId" },
    { field: "PeriodId" },

    ]);
      
    return (<div className="ag-theme-quartz" style={{ height: 500 }}>
    {/* The AG Grid component */}
    <AgGridReact rowData={rowData} columnDefs={colDefs} />
  </div>)
  }

  return (
    <div>

    <label htmlFor="periods">Select a period:</label>
      <select onChange={handlePeriodSelect} name="periods" id="periods">
        {periodsWithExpenses.map(period => <option value={period.number}>{period.number}</option>)}
      </select>

      <GridForExpenses />

    </div>
  )
}
