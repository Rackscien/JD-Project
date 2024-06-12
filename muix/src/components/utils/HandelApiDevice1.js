import axios from 'axios'

const baseUrl=  "http://localhost:1000/device"

const getAllDevice1 = (setDevice1,deviceId,date)=>{
    console.log(`Device Id ${deviceId}, `);
    console.log(`Date : ${date}`);
    if(deviceId && date){
        // device id is there
        axios
        .get(`${baseUrl}/${deviceId}/${date}`)
        .then(({data})=>{
            // console.log(data)
            console.log('data--->',data)
            setDevice1(data);
            // console.log(device1);
            console.log('du')

        })
    }else if(deviceId){
        // device id is there
        axios
        .get(`${baseUrl}/${deviceId}`)
        .then(({data})=>{
            // console.log(data)
            console.log('data--->',data)
            setDevice1(data);
            // console.log(device1);
            console.log('du')

        })
    } else {
        // device id is not there but date is there
        if(date){
            axios
        .get(`${baseUrl}/`)
        .then(({data})=>{
            // console.log(data)
            console.log('data--->',data)
            setDevice1(data);
            // console.log(device1);
            console.log('ud')

        })
    } else {
                // device id is not there and date is not there

             axios
        .get(`${baseUrl}/`)
        .then(({data})=>{
            // console.log(data)
            console.log('data--->',data)
            setDevice1(data);
            // console.log(device1);
            console.log('ud')

        })
    }
}
//     if(deviceId===undefined && date===undefined){
//         axios
//         .get(`${baseUrl}/`)
//         .then(({data})=>{
//             // console.log(data)
//             console.log('data--->',data)
//             setDevice1(data);
//             // console.log(device1);
//             console.log('uu')
//         })
//     }
//    else if(deviceId!==undefined && date===undefined){
//         axios
//         .get(`${baseUrl}/${deviceId}`)
//         .then(({data})=>{
//             // console.log(data)
//             console.log('data--->',data)
//             setDevice1(data);
//             // console.log(device1);
//             console.log('du')

//         })
//     }
//     else if(deviceId===undefined ){
//         console.log("deviceId===undefined", deviceId===undefined)
//         axios
//         .get(`${baseUrl}/`)
//         .then(({data})=>{
//             // console.log(data)
//             console.log('data--->',data)
//             setDevice1(data);
//             // console.log(device1);
//             console.log('ud')

//         })
//     }

//     else{
//         axios
//      .get(`${baseUrl}/${deviceId}/${date}`)
//     .then(({data})=>{
//         // console.log(data)
//         console.log('data--->',data)
//         setDevice1(data);
//         // console.log(device1);
//         console.log('dd')

//     })
//     }
    
}

const addDevice1 =(sName,setSname,startTime,setStartTime,endTime,setEndTime,type,setType,setDevice1,deviceId,date)=>{
    axios
    .post(`${baseUrl}/${deviceId}/${date}/save`,{deviceId,sName,startTime,endTime,type,date})
    .then((data)=>{
        console.log(data);
        setSname("");
        setStartTime();
        setEndTime();
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