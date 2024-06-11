import React from 'react'
import WeekPlan from '../components/WeekPlan'
import '../App.css'

function Sidebar({date, setDate}) {
  return (
    <div className="RightUpper">
          <div className="RightUpperInner">
            <h3>Week Plan</h3>
            <div className="x">
              <WeekPlan date={date} setDate={setDate}/>
            </div>
          </div>
        </div>
  )
}

export default Sidebar