import express from 'express';
import _ from 'lodash';
import http from 'http'
import dbConnect from './database/dbConfig.js';

const app = express();
const db = dbConnect(app);

app.get("/", (req, res) => {

    console.log(db);
    // res.send(JSON.stringify(db))

    res.send("ASDASDASDASD")
});

app.use(express.json());

// app.listen(4000, () => {
//     console.log("Listening on port 4000");
// })