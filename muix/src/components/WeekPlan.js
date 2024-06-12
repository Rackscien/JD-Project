import React, { useState } from 'react'

function WeekPlan(date , setDate) {
  const styl ={
    fontSize:"10px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "gray",
    width: "20px",
    height: "20px",
    marginRight: "10px",
    color: "white",
    cursor: "pointer",
    
  };
  

  const [currentMonthIndex,setcurrentMonthIndex]=useState();
  const [rangeStart,setRangeStart]=useState(1);
  const sectionLength= 7;

  const [rangeEnd,setRangeEnd]=useState(rangeStart+sectionLength);

  const [month,setMonth]= useState("January")
  const monthList =["Jan", "Feb", "Mar", "May" , "June" , "July" , "Aug" , "Sept", "Oct", "Nov", "Dec"]
  // let nums = range(order.current_round + 1, order.rounds + 1);

// return nums.map(i => (
//   <li><button key={i} id={i} className='rounds_btn'></button></li>
// ));

// quick range utility (could use lodash...)
function range(start, end) {
  let nums = [];
  if(end<start){
    for(let i=start;i<31;i++){
      nums.push(i);
    }
    setMonth()
    for(let i=1;i<end;i++){
      nums.push(i);
    }
    return nums;
  }
  for (let i = start; i < end; i++) nums.push(i);
  return nums;
}

  const BackCalender = () =>{
    const x=(rangeStart-sectionLength)%30;
    const y=(rangeEnd-sectionLength)%30;
    setRangeStart(x);
    setRangeEnd(y);
    console.log(x,y);
    // alert("Back is Clicked !");
  }

  const NextCalender = () =>{
   
    
    // if(rangeEnd===28  && month==="January"){
    //   range(rangeStart, rangeEnd)
    // }
    const x=(rangeStart+sectionLength)%30;
    const y=(rangeEnd+sectionLength)%30;
    setRangeStart(x);
    setRangeEnd(y);
    console.log(x,y);


    // alert("Next is Clicked !");
  }

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

const months= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  

const monthMap= {
  "Jan": daysInMonth(1,2024),
  "Feb": daysInMonth(2,2024),
  "Mar": daysInMonth(3,2024),
  "Apr": daysInMonth(4,2024),
  "May": daysInMonth(5,2024),
  "Jun": daysInMonth(6,2024),
  "Jul": daysInMonth(7,2024),
  "Aug": daysInMonth(8,2024),
  "Sep": daysInMonth(9,2024),
  "Oct": daysInMonth(10,2024),
  "Nov": daysInMonth(11,2024),
  "Dec": daysInMonth(12,2024),
}

console.log("monthMap", monthMap);
  return (
    <div >
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly",margin:"5px"}}>
       
       {
        range(rangeStart, rangeEnd).map((val)=>{
          return  <span style={{fontSize:"13px", margin:"5px"}}>
          <button onClick={()=>{setDate(val)}} style={styl}>{val}</button>
          {month}
          
        </span>
        })
       }
{/* <Calendar onChange={setDate} value={date} />         */}
      </div>
      <div style={{fontSize:"13px", fontWeight:"bold"}}>Step 3</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <button onClick={BackCalender} style={{fontSize:"13px" , fontWeight:"bold", cursor:"pointer"}}>Back</button>
        <button onClick={NextCalender} style={{fontSize:"13px" , fontWeight:"bold" ,  cursor:"pointer"}}>Next</button>
      </div>
    </div>
  );
}

export default WeekPlan;
