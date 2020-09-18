const express = require('express');
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully Sekarang Anda Terkonek Ke database");    
}).catch(err => {
    console.log('Error database Tidak Terkoneksi atau Tidak Ada');
    process.exit();
});

app.use("/api",require('./router/Router'));

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});