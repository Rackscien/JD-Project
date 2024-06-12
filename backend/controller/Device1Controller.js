const Device1Models= require('../models/Device1Models')

module.exports.getDevice1 = async (req, res)=>{
    console.log((req.params));
    // res.send(`Hello ${req.params.deviceId}`);
    const id=(req.params.deviceId) || undefined;
    const date=Number(req.params.date) || undefined;
    // const device1={};
    if(date===undefined && id===undefined){
        const device1 = [];
        // await Device1Models.find({});
        res.send(device1);
    }
    else if(date===undefined){
        const device1 = await Device1Models.find({"deviceId":id});
        res.send(device1);
    }
   else if(id===undefined){
        const device1 = [];
        // await Device1Models.find({});
        res.send(device1);
    }

    else{
     const device1 = await Device1Models.find({"deviceId":id, "date":date});
    res.send(device1);
}
}

module.exports.saveDevice1 = async (req,res)=>{
    const {sName,startTime,endTime,type}= req.body;
    const id= req.params.deviceId;
    const date= Number(req.params.date);
    
    const x={deviceId:id,sName:sName,startTime:startTime,endTime:endTime,type:type, date:date};
    console.log(x);
    Device1Models.
    create({deviceId:id,sName,startTime,endTime,type,date:date})
    .then((data)=>{
        console.log("Added Successfully");
        console.log(data);
        res.send(data);
    });
   
}

module.exports.updateDevice1 = async (req,res)=>{
    const {_id,type}=req.body;
    Device1Models.findByIdAndUpdate(_id,{type}).
    then(()=>{res.send('Updated Successfully')}).
    catch((err)=>{console.log(err)})

}

module.exports.deleteDevice1 = async (req,res)=>{
    const {_id}= req.body;
    Device1Models.findByIdAndDelete(_id).
    then(()=>res.send("Deleted Successfully")).catch((err)=>{console.log(err)})
}