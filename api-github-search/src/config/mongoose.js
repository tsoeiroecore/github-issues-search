require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('debug', process.env.DEBUG != undefined);
const DB_URI = process.env.DATABASE || "mongodb://localhost:27017/challengenuorder";
const DB_URI_TEST = 'mongodb://localhost:27017/testdb';

//Save to in-memory db (simulate mongo inserts to store recent searchs)
function open() {
  return new Promise((resolve, reject) => {
    if (process.env.DEBUG != undefined) {
      let Mockgoose = require('mockgoose').Mockgoose;
      let mockgoose = new Mockgoose(mongoose);
      mockgoose.prepareStorage().then(function () {
        mongoose.connect(DB_URI_TEST, (err, res) => {
          if (err) return reject(err);
          resolve();
        });
      }).catch(reject);
    } else {
      mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err, res) => {
        if (err) return reject(err);
        resolve();
      });
    }
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { close, open };
