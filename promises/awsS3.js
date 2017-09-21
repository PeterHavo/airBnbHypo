let aws = require('aws-sdk')
let S3 = new aws.S3({apiVersion: '2006-03-01'})
var s3BucketMgt = require("s3-nodejs-sample");
let { foo } = require("./awsS3config.js")

console.log('imported fooo',foo)
//------------------------USING NPM S3 NODEJS SAMPLE









//----------------------USING STANDART AWS SDK

// var getParams = {
//     Bucket: 'download.open.api.gov', // your bucket name,
//     Key: 'abc.txt' // path to the object you're looking for
// }


// S3.getObject(getParams, (err,data) => {
//     if (err){
//         return err;
//     } else {
//         let objData = data
//         console.log (data)
//     }
// })

