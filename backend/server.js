const express= require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const cors = require('cors')
const routes=require('./routes/Device1Routes')

const app=express();

app.use(express.json());
app.use(cors());
app.use('/device',routes);


const PORT = 1000 || process.env.PORT;
mongoose.connect(process.env.MONGODB_URL).then(()=>{console.log('MOngoDB is connected')}).catch((err)=>{console.log(err)});

app.listen(PORT,()=>{console.log(`Server listen at Port : ${PORT}`)});