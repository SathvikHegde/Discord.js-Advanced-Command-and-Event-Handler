const mongoose = require("mongoose");
const user = require("../models/user.js");

function checkUser(userobj) {
  user.findOne({
    userID: userobj.id
  }, (err, res) => {
    if(err) console.log(err);

    if(!res) {
      return false;
    } else {
      return true;
    }
  });
}

function createUser(userobj) {
  user.findOne({
    userID: userobj.id
  }, (err, res) => {
    if(err) console.log(err);

    if(!res) {
      const userDoc = new user({
        userID: userobj.id,
        userName: userobj.username,
        coins: 1000
      });
      userDoc.save().catch(err => console.log(err));
    }
  });
}

function getUser(userobj, callback) {
  user.findOne({
    userID: userobj.id
  }, (err, res) => {
    if(err) console.log(err);

    if(res) {
      return callback(res);
    }
  });
}

module.exports = {
  checkUser,
  createUser,
  getUser
};