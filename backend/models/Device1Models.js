const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
    deviceId:{
      type:String,
      require:true,
    },
    sName: {
      type: String,
      require:true,
    },
    startTime:{
      type:Number,
      require: true,
    },
    endTime:{
      type:Number,
      require: true,
    },
    type:{
      type: String,
      require:true,
    },
    date:{
      type: Number,
      require: true,
    }
    
});
module.exports = mongoose.model("Device1",deviceSchema);