/**
 * Created by XPL on 2020/5/31.
 */
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  region: 'us-east-2'
});
exports.handler = function (event, content, callback) {
  console.log(event);
  s3.listBuckets((err, data) => {
    if(err){
      console.log(err);
      return false;
    }
    let result = {
      statusCode: 200,
      body: data
    };
    callback(null, result);
  });
};
