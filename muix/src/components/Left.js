import { Box, useStepContext } from "@mui/material";
import {Link} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import {
  SimpleTreeView,
  SimpleTreeViewRoot,
} from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { Checkbox, FormControlLabel } from "@deere/fuel-react";

function Left({deviceId, setDeviceId , setDate}) {
  useEffect(()=>{
    // setDeviceId("2");
    console.log(`DeviceId ${deviceId}`)
  })

  const [checked1,setChecked1]=useState(false);
  const [checked2,setChecked2]=useState(false);
  const [checked3,setChecked3]=useState(false);
  const [checked4,setChecked4]=useState(false);

  const deviceClicked= (id)=>{
    
  }


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
                        control={<Checkbox name="item1" checked={checked1} onChange={()=>{setChecked1(!checked1);setDate();{checked1? setDeviceId("1"):setDeviceId("1")} }}/>}
                        label="Device-1"
                      />
                    }
                  />
                  <TreeItem
                    itemId="grid-premium2"
                    label={
                      <FormControlLabel
                        control={<Checkbox name="item1" checked={checked2}  onChange={()=>{setChecked2(!checked2); setDate(); checked2 ? setDeviceId("1"):setDeviceId("2")}}/>}
                        label="Device-2"
                      />
                    }
                  />
                  <TreeItem
                    itemId="grid-premium3"
                    label={
                      <FormControlLabel
                        control={<Checkbox name="item1" checked={checked3} onChange={()=>{setChecked3(!checked3); setDate(); {checked3? setDeviceId("1"):setDeviceId("3")} }}/>}
                        label="Device-3"
                      />
                    }
                  />
                  <TreeItem
                    itemId="grid-premium4"
                    label={
                      <FormControlLabel
                        control={<Checkbox name="item1" checked={checked4} onChange={()=>{setChecked4(!checked4); setDate(); {checked4? setDeviceId("1"):setDeviceId("4")} }}/>}
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
