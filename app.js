const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config(); 
const app = express();
const { locationRoutes } = require('./routes/locationRoutes');
const { jobRoutes } = require('./routes/jobRoutes');

 
mongoose.connect('mongodb+srv://sarash:sara12345@cluster0.ebarplg.mongodb.net/relations')
.then(()=> console.log("Database connected"))
.catch(err => console.log(err)) 


app.use(express.json())
app.use(cors());


app.use('/api/locations', locationRoutes)
app.use('/api/jobs',jobRoutes)


app.get('/', async (req, res) => {
    res.send('OK!')
})

const port = 3000;


app.listen(port, () => {
  console.log('Server is running...');
});