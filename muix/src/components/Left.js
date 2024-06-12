import { Box, useStepContext } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  SimpleTreeView,
  SimpleTreeViewRoot,
} from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { Checkbox, FormControlLabel } from "@deere/fuel-react";

function Left({ deviceId, setDeviceId, setDate }) {
  useEffect(() => {
    // setDeviceId("2");
    console.log(`DeviceId ${deviceId}`);
  });

  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(true);

  // const deviceClicked= (id)=>{

  // }
  const handleChange = (data) => {
    if (data === "1") {
      if (checked1 === true) {
        setDeviceId("1");
      }
      else{
        setDeviceId("");

      }
      setChecked1(!checked1);
      if(checked2===false){
        setChecked2(true);
      }if(checked3===false){
        setChecked3(true);
      }if(checked4===false){
        setChecked4(true);
      }
    } else if (data === "2") {
      if (checked2 === true) {
        setDeviceId("2");
      }
      else{
        setDeviceId("");

      }
      setChecked2(!checked2);
      if(checked1===false){
        setChecked1(true);
      }if(checked3===false){
        setChecked3(true);
      }if(checked4===false){
        setChecked4(true);
      }
    } else if (data === "3") {
      if (checked3 === true) {
        setDeviceId("3");
      }
      else{
        setDeviceId("");

      }
      setChecked3(!checked3);
      if(checked2===false){
        setChecked2(true);
      }if(checked1===false){
        setChecked1(true);
      }if(checked4===false){
        setChecked4(true);
      }
    } else if (data === "4") {
      if (checked4 === true) {
        setDeviceId("4");
      }
      else{
        setDeviceId("");

      }
      setChecked4(!checked4);
      if(checked2===false){
        setChecked2(true);
      }if(checked3===false){
        setChecked3(true);
      }if(checked1===false){
        setChecked1(true);
      }
    }
    setDate();
    handleChecked(data);
  };
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);
  const [c4, setC4] = useState(false);
  const handleChecked = (data) => {
    if (data === "1") {
      setC1(!c1);
      // setChecked1(!checked1);
      setC2(false);
      setC3(false);
      setC4(false);
    }

   else if (data === "2") {
      setC2(!c2);
      // setChecked2(!checked2);
      setC1(false);
      setC3(false);
      setC4(false);
    }

    else if (data === "3") {
      setC3(!c3);
      setChecked3(!checked3);
      setC2(false);
      setC1(false);
      setC4(false);
    }

   else if (data === "4") {
      setC4(!c4);
      // setChecked4(!checked4);
      setC2(false);
      setC1(false);
      setC3(false);
    }
  };

  return (
    <div>
      <Box sx={{ minHeight: 320, minWidth: 150 }}>
        <SimpleTreeView>
          <TreeItem
            itemId="grid"
            label={
              <FormControlLabel
                control={<Checkbox name="item1" />}
                label="Factory"
              />
            }
            style={{ height: "10px" }}
          >
            <TreeItem
              itemId="grid-community"
              label={
                <FormControlLabel
                  control={<Checkbox name="item1" />}
                  label="Department-1"
                />
              }
            >
              <TreeItem
                itemId="grid-pro"
                label={
                  <FormControlLabel
                    control={<Checkbox name="item1" />}
                    label="Line-1"
                  />
                }
              >
                <TreeItem
                  itemId="grid-premium"
                  label={
                    <FormControlLabel
                      control={<Checkbox name="item1" />}
                      label="Station-1"
                    />
                  }
                >
                  <TreeItem
                    itemId="grid-premium1"
                    label={
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="item1"
                            checked={c1}
                            value={checked1}
                            onChange={() => {
                              handleChange("1");
                            }}
                          />
                        }
                        label="Device-1"
                      />
                    }
                  />
                  <TreeItem
                    itemId="grid-premium2"
                    label={
                      <FormControlLabel
                        control={
                          <Checkbox
                          checked={c2}
                            name="item1"
                            value={checked2}
                            onChange={() => {
                              handleChange("2");
                            }}
                          />
                        }
                        label="Device-2"
                      />
                    }
                  />
                  <TreeItem
                    itemId="grid-premium3"
                    label={
                      <FormControlLabel
                        control={
                          <Checkbox
                          checked={c3}
                            name="item1"
                            value={checked3}
                            onChange={() => {
                              handleChange("3");
                            }}
                          />
                        }
                        label="Device-3"
                      />
                    }
                  />
                  <TreeItem
                    itemId="grid-premium4"
                    label={
                      <FormControlLabel
                        control={
                          <Checkbox
                          checked={c4}
                            name="item1"
                            value={checked4}
                            onChange={() => {
                              handleChange("4");
                            }}
                          />
                        }
                        label="Device-4"
                      />
                    }
                  />
                </TreeItem>
              </TreeItem>
            </TreeItem>
          </TreeItem>
        </SimpleTreeView>
      </Box>
    </div>
  );
}

export default Left;
