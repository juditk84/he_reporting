import React from 'react'
import {AgGridReact} from 'ag-grid-react'

import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

export default function grid() {

        // Row Data: The data to be displayed.
      const [rowData, setRowData] = useState([]);
    
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
          
    return (
    
    <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>)
}
