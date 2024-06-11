import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Table from "../components/Table";
import "../App.css";
import { Outlet } from "react-router-dom";

function Layout() {
  const [deviceId,setDeviceId]=useState("");
  const [date,setDate] = useState(undefined);
  return (
    <div className="app">
      <Header deviceId={deviceId} setDeviceId={setDeviceId} setDate={setDate}/>
      <div className="right">
        <Sidebar date={date} setDate={setDate}/>
        <div className="RightLower">
          <Table deviceId={deviceId} setDeviceId={setDeviceId} date={date}/>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Layout;
