import axios from 'axios'

const baseUrl=  "http://localhost:1000/device"

const getAllDevice1 = (setDevice1,deviceId,date)=>{
    console.log(`Device Id ${deviceId}, `);
    console.log(`Date : ${date}`);
    if(deviceId==undefined && date==undefined){
        axios
        .get(`${baseUrl}/`)
        .then(({data})=>{
            // console.log(data)
            console.log('data--->',data)
            setDevice1(data);
            // console.log(device1);
        })
    }
   else if(date==undefined){
        axios
        .get(`${baseUrl}/${deviceId}`)
        .then(({data})=>{
            // console.log(data)
            console.log('data--->',data)
            setDevice1(data);
            // console.log(device1);
        })
    }

    else{
        axios
     .get(`${baseUrl}/${deviceId}/${date}`)
    .then(({data})=>{
        // console.log(data)
        console.log('data--->',data)
        setDevice1(data);
        // console.log(device1);
    })
    }
    
}

const addDevice1 =(sName,setSname,startTime,setStartTime,endTime,setEndTime,type,setType,setDevice1,deviceId,date)=>{
    axios
    .post(`${baseUrl}/${deviceId}/${date}/save`,{deviceId,sName,startTime,endTime,type,date})
    .then((data)=>{
        console.log(data);
        setSname("");
        setStartTime(null);
        setEndTime(null);
        setType("");
        getAllDevice1(setDevice1,deviceId,date);
    })
}
const deletRow = (_id,setDevice1,deviceId,date)=>{
    axios
    .post(`${baseUrl}/${deviceId}/delete`,{_id})
    .then((data)=>{
        console.log(data)
        getAllDevice1(setDevice1,deviceId,date);
    })
}

export {getAllDevice1, addDevice1, deletRow}