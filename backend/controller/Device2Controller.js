const Device2Models= require('../models/Device2Models')

module.exports.getDevice2 = async (req, res)=>{
    const device1 = await Device2Models.find();
    res.send(device1);
}

module.exports.saveDevice2 = async (req,res)=>{
    const {sName,startTime,endTime,type}=req.body;
    Device2Models.
    create({sName,startTime,endTime,type}).
    then((data)=>{
        console.log('Added Successfullt');
        console.log(data)
        res.send(data);
    })
}

module.exports.updateDevice2 = async (req,res)=>{
    const {_id,type}=req.body;
    Device2Models.findByIdAndUpdate(_id,{type}).
    then(()=>{res.send('Updated Successfully')}).
    catch((err)=>{console.log(err)})

}

module.exports.deleteDevice2 = async (req,res)=>{
    const {_id}= req.body;
    Device2Models.findByIdAndDelete(_id).
    then(()=>res.send("Deleted Successfully")).catch((err)=>{console.log(err)})
}