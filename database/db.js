var MongoClient = require('mongodb').MongoClient;

import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
var url = "mongodb+srv://mgcalilongpdm:lZzNRkkDxsgEIh4D@cluster0.penn0ax.mongodb.net/Ngekflix?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});