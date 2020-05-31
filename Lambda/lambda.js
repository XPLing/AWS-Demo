/**
 * Created by XPL on 2020/5/31.
 */
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  region: 'us-west-2'
});
exports.handler = function (event, content, callback) {
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
