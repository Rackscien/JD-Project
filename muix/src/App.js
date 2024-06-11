import "./App.css";
import { Button } from "@deere/fuel-react";
import Table from "./components/Table";
import WeekPlan from "./components/WeekPlan";
import Left from "./components/Left";
import{BrowserRouter, Route,Routes} from 'react-router-dom'
import Layout from "./layouts/Layout";
import Table2 from "./DeviceTables/Table2";
import Table3 from "./DeviceTables/Table3";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}  >
          <Route index element={<Table/>}/>
          <Route path="device2" element={<Table2/>}/>
          <Route path="device3" element={<Table3/>}/>
          <Route path="device4" element={<Table2/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="app">
    //   <div className="left">
    //     <div className="LeftInner">
    //       <h3>UNS</h3>
    //       <div className="x1">
    //         <Left />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="right">
    //     <div className="RightUpper">
    //       <div className="RightUpperInner">
    //         <h3>Week Plan</h3>
    //         <div className="x">
    //           <WeekPlan />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="RightLower">
    //       <Table />
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
