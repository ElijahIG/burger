const connection = require("./connection.js");

const orm = {
    selectWhere: (tableInput, colToSearch, valOfCol) => {
      const queryString = "SELECT * FROM ?? WHERE ?? = ?";
      const values = [tableInput, colToSearch, valOfCol];
  
      connection.query(queryString, values, (err, result) => {
        if (err) {
          throw err;
        }
        console.log(result);
      });
    },

selectAll ()

insertOne ()

updateOne ()

};

module.exports = orm;