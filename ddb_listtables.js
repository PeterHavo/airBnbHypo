//configure aws

var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

// Create the DynamoDB service object
ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

// Call DynamoDB to retrieve the list of tables
ddb.listTables({Limit: 10}, function(err, data) {
  if (err) {
    console.log("Error", err.code);
  } else {
    console.log("Table names are ", data.TableNames);
  }
});