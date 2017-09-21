// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials and set region from JSON file
AWS.config.loadFromPath('./config.json');

// Create the DynamoDB service object
ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

var params = {
  TableName: 'CUSTOMER_LIST',
  Key: {
    'CUSTOMER_ID' : {N: '1'},
  },
  ProjectionExpression: 'CUSTOMER_ID'
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});


// // Load the AWS SDK for Node.js
// var AWS = require('aws-sdk');
// // Load credentials and set region from JSON file
// AWS.config.loadFromPath('./config.json');

// // Create the DynamoDB service object
// ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

// var params = {
//   TableName: 'CUSTOMER_LIST',
//   Key: {
//     'CUSTOMER_NAME' : {S: 'Richard Roe'},
//   }
// };

// // Call DynamoDB to delete the item from the table
// ddb.deleteItem(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data);
//   }
// });