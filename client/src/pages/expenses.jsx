import React from 'react'
import { useState, useEffect } from 'react';
import Grid from '../components/grid';

export default function expenses({activeProject}) {

  const [activePeriod, setActivePeriod] = useState();
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    activePeriod && getPeriodExpenses(activePeriod[0].number)
  }, [activePeriod])

  async function getPeriodExpenses(period_id) {
    try {
      const response = await fetch(`api/${period_id}/expenses`);
      if (!response.ok) {
        throw new Error("Oops, something went wrong");
      }

      const data = await response.json();
      setExpenses(data);
      console.log("the expenses selected:",data)
    
    } catch (error) {
      console.log(error);
    }
  }

  function handlePeriodSelect(event){

    setActivePeriod(activeProject.Periods.filter( period => period.number === +(event.target.value)))

  }

  return (
    <div>

    <label htmlFor="periods">Select a period:</label>
      <select onChange={handlePeriodSelect} name="periods" id="periods">

        {activeProject.Periods.map(period => <option key={period.id} value={period.number}>{period.number}</option>)}
      </select>

      <Grid expenses={expenses}/>


    </div>
  )
}