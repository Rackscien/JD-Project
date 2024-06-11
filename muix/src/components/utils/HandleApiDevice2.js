import axios from 'axios'

const baseUrl=  "http://localhost:1000/device2"

const getAllDevice2 = (setDevice1)=>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log('data--->',data)
        setDevice1(data);
        // console.log(device1);
    })
}

const addDevice2 =(sName,setSname,startTime,setStartTime,endTime,setEndTime,type,setType,setDevice1)=>{
    axios
    .post(`${baseUrl}/save`,{sName,startTime,endTime,type})
    .then((data)=>{
        console.log(data);
        setSname("");
        setStartTime(null);
        setEndTime(null);
        setType("");
        getAllDevice2(setDevice1);
    })
}
const deletRow2 = (_id,setDevice1)=>{
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        console.log(data)
        getAllDevice2(setDevice1);
    })
}

export {getAllDevice2, addDevice2, deletRow2}