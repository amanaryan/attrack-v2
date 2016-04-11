var fs=require("fs");

function home(request,response){

  if(request.url ==="/"){
          fs.readFile('index.html',function (err, data){
          response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
          response.write(data);
          response.end();}






function user(request,response){

  var username=request.url.replace("/","");
  if(username.length>0){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write("Header\n")
    response.write(username+"\n")
    response.end("Footer\n")}


}

module.exports.home = home;
module.exports.user = user;
