var orm = require("../config/orm.js");

var show = {
  
  all: function(cb) {
    orm.all("shows", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("shows", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(objColVals, condition, cb) {
    orm.update("shows", objColVals, condition, function(res) {
      cb(res);
    });
  },

  delete: function(condition, cb) {
    orm.delete("shows", condition, function(res) {
      cb(res);
    });
  }

};

module.exports = show;
