var path = require('path');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/master';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);}
     else {
      console.log('Connection established to', url);

      var collection = db.collection('studb');

     function dbLookup(query,r,req,tweet){

     collection.find({ "$or": [ {"name":{'$regex': query}},{"reg_number":{'$regex': query}}]},{url:1,reg_number:1, _id:0}).toArray(function (err, result) {
        if (err) {
          console.log(err);
                  }
      else if (result.length) {
            console.log("Step 3 got the result");
            resulturl = result[0].url;
            exports.resulturl = resulturl;

            r.redirect(301,resulturl);
            tweet.doTweet(" of "+req.body.username.toUpperCase());
            console.log("in db file "+resulturl);
          } else {
          console.log('No document(s) found with defined "find" criteria!');
          r.sendFile('error.html', { root: path.join(__dirname) });
          tweet.doTweet("and made a typo.");
        }

      });

  }}

module.exports.dbLookup = dbLookup;

  });
