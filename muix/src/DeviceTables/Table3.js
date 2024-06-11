import {
    Button,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableBody,
    IconButton,
    Card,
    TablePagination,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownButton,
  } from "@deere/fuel-react";
  import { Delete, Close } from "@mui/icons-material";
  import React, { useEffect, useState } from "react";
  import { MdModeEdit } from "react-icons/md";
  import { IoIosSave } from "react-icons/io";
import { addDevice2, deletRow2, getAllDevice2 } from "../components/utils/HandleApiDevice2";
import { addDevice3, deletRow3, getAllDevice3 } from "../components/utils/HandleApiDevice3";
  
  function Table3() {
    const [device1, setDevice1] = useState([]);
  
    const [sName, setSname] = useState("");
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [type, setType] = useState("");
    
    useEffect(() => {
      getAllDevice3(setDevice1);
      console.log(device1);
    }, []);
  
    const [data, setData] = useState([
      { id: 1, name: "Break-1", start_time: 1000, end_time: 1100, type: "Break" },
      { id: 2, name: "Break-2", start_time: 1600, end_time: 1645, type: "Break" },
      { id: 3, name: "Shift-1", start_time: 800, end_time: 1600, type: "Shift" },
      { id: 4, name: "Shift-2", start_time: 1645, end_time: 2400, type: "Shift" },
    ]);
    const [nam, setName] = useState("");
    // const [type, setType] = useState("");
    const [start, setStart] = useState();
    const [end, setend] = useState();
  
    const NewEntry = () => {
      const newEntry = {
        id: data.length + 1,
        name: nam,
        start_time: start,
        end_time: end,
        type: type,
      };
      setData([...data, newEntry]);
      // newEntry.push({ name: nam, start_time: start, end_time: end, type: type });
      // setData(newEntry);
      console.log(newEntry);
      setName("");
      setType("");
      setStart("");
      setend("");
    };
    const [isDelete, setIsDelete] = useState(false);
    const [isSave, setIsSave] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const [isClicked, setIsClicked] = useState();
    const [isTypeClicked, setIsTypeClicked] = useState(false);
    const setRow = (id, index) => {
      setSelectedId(id);
      setIsDelete(!isDelete);
      setIsSave(!isSave);
      setIsClicked(!isClicked);
      setIsTypeClicked(!isTypeClicked);
    };
  
  
  
    const [dropDownData, setDropDownData] = useState("");
  
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "",
        }}
      >
        <div
          style={{
            display: "flex",
  
            alignItems: "center",
            justifyContent: "space-around",
            // padding: "5px",
            backgroundColor: "",
          }}
        >
          <input
            style={{ height: "30px", width: "13vw", margin: "5px" }}
            type="text"
            placeholder="Name"
            value={sName}
            onChange={(e) => setSname(e.target.value)}
          />
          {/* {type} */}
          <div>
            <input
              style={{ height: "30px", width: "13vw", margin: "5px" }}
              type="number"
              placeholder="Start Time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div>
            <input
              style={{ height: "30px", width: "13vw", margin: "5px" }}
              type="number"
              placeholder="End Time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
          <div>
            <input
              style={{ height: "30px", width: "13vw", margin: "5px" }}
              type="text"
              placeholder="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div>
            <Button
              style={{ margin: "5px" }}
              size="small"
              variant="primary"
              onClick={()=>addDevice3(sName,setSname,startTime,setStartTime,endTime,setEndTime,type,setType,setDevice1)}
            >
              + ADD
            </Button>
          </div>
        </div>
        <Card
          sx={{
            overflow: "hidden",
            width: "73vw",
          }}
        >
          <TableContainer
            component="div"
            sx={{
              maxHeight: 325,
            }}
          >
            <TableContainer aria-label="sticky table" size="small" stickyHeader>
              <TableHead>
                <TableRow style={{ backgroundColor: "green", width: "70vw" }}>
                  <TableCell
                    align="left"
                    style={{ border: "1px solid black", minWidth: 180 }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ border: "1px solid black", minWidth: 180 }}
                  >
                    Start Time
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ border: "1px solid black", minWidth: 180 }}
                  >
                    End Time
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ border: "1px solid black", minWidth: 180 }}
                  >
                    Type
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ border: "1px solid black", minWidth: 180 }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {device1.map((val, ind) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      onClick={() => setRow(val._id, ind)}
                      style={
                        isClicked && val._id === selectedId
                          ? {
                              boxShadow:
                                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                            }
                          : {}
                      }
                    >
                      <TableCell align="left">{val.sName}</TableCell>
                      <TableCell align="left">{val.startTime}</TableCell>
                      <TableCell align="left">{val.endTime}</TableCell>
                      <TableCell
                        align="left"
                        style={
                          isTypeClicked && val._id === selectedId
                            ? {
                                boxShadow:
                                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                                display: "flex",
                                justifyContent: "space-between",
                              }
                            : { display: "flex", justifyContent: "space-between" }
                        }
                      >
                        <div>{val.type}</div>
  
                        <div>
                          <Dropdown>
                            <DropdownButton
                              style={{ fontSize: "5px" }}
                            ></DropdownButton>
                            <DropdownMenu>
                              <DropdownItem component="a" href="#">
                                Shift
                              </DropdownItem>
                              <DropdownItem component="a" href="#">
                                Break
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </TableCell>
                      <TableCell align="left">
                        {val._id === selectedId && isSave ? (
                          <IconButton aria-label="save">
                            {" "}
                            <IoIosSave style={{ fontSize: "20px" }} />
                          </IconButton>
                        ) : (
                          <IconButton>
                            <MdModeEdit
                              style={{
                                fontSize: "20px",
                                backgroundColor: "rgb(223, 222, 222, 0.5)",
                              }}
                            />
                          </IconButton>
                        )}
  
                        {val._id === selectedId && isDelete ? (
                          <IconButton
                            aria-label="close"
                            onClick={() => deletRow3(val._id,setDevice1)}
                          >
                            {" "}
                            <Close style={{ fontSize: "20px" }} />
                          </IconButton>
                        ) : (
                          <IconButton aria-label="delete">
                            <Delete style={{ fontSize: "20px" }} />
                          </IconButton>
                        )}
                        {/* {UpdateIcon}
                        {DeleteIcon} */}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </TableContainer>
          </TableContainer>
          <TablePagination
            count={15}
            onPageChange={function Ga() {}}
            onRowsPerPageChange={function Ga() {}}
            page={0}
            rowsPerPage={5}
            rowsPerPageOptions={[5, 10, 25, 100]}
          />
        </Card>
      </div>
    );
  }
  
  export default Table3;
  