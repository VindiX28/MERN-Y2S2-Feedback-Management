import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors'
import cookieParser from "cookie-parser";
import userRoute from './Routes/Users.js'
import authRoute from './Routes/Auth.js'
import reviewRoute from './Routes/Reviews.js'
import emailRoutes from './Routes/EmailRoutes.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOptions = {
    origin:true,
    credentials:true
}

mongoose.set("strictQuery", false)
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('MongoDB Database Connected🌸🌿');
    } catch (err) {
        console.log('MongoDB Database Connection Failed');
    }
}



app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/review', reviewRoute)
app.use('/api/v1/email', emailRoutes);
app.post('/api/v1/tours')
app.get('/api/v1/teams')



app.listen(port , ()=>{
    connect();
    console.log('Server Running on PORT 🌍 ', port);
})


  
  
  
