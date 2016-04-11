var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '0trCQIlnYynNv3RCjRunTJEb1',
  consumer_secret: '5XVstnxELbeSjlVLOZ6PemXaicIBjwM7BvQxFwFgw6sAETvsBs',
  access_token_key: '4547811732-OaGtV0FRUlz0Ru0s7p8RH6EWH88W3PUFeCW8SgN',
  access_token_secret: 'AyS2DuVVTQ6b9kmG0RPBJYodFp5Zsd2LisAYfOr3ZvIvr'
});


function doTweet(msg){
client.post('statuses/update', {status:"Somebody searched for the internals"+msg}, function(error, tweet, response){
  if (!error) {
    console.log("tweet sucessful");
  }
});
}
module.exports.doTweet = doTweet;
