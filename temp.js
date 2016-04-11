var querystring = require('querystring');
var http = require('https');
var cheerio = require('cheerio');
var request = require('request');
var express = require('express');
var path = require('path')
var app = express();


app.set('view engine', 'jade');

app.get('/api/:input', function(req,resf){

var input=req.params.input;

                              var options = {
                                url: 'https://creator.zohopublic.com/srm_university/attendance-2015-16/view-perma/Student_Status/H2rQs63qk22E9xdk1PAnBnNqzuFfgZMtD9yN5RkfuA7V6RsCdOfxxXeXjud80upTEZgQxjPJR3b0ffxU49rYOSr7fpaa9g1hRZmd/studentID=2727643000005460771',
                                headers: {'User-Agent':' Secure_User',
                                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                        'Accept-Language':' en-US,en;q=0.5',
                                        'Accept-Encoding':' gzip, deflate'
                                   },
                                   gzip:true
                              };

              function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                  $ = cheerio.load(body);
                  console.log("STEP 5 , Parsing Begins");
              rn =$('.mainDiv table:nth-child(3) thead tr:nth-child(1) td:nth-child(3)').html();
              name = $('.mainDiv table:nth-child(3) thead tr:nth-child(2) td:nth-child(3)').html();
              branch = $('.mainDiv table:nth-child(3) thead tr:nth-child(4) td:nth-child(3)').html();
              sem = $('.mainDiv table:nth-child(3) thead tr:nth-child(5) td:nth-child(3)').html();
							console.log(rn);

              sub1_code=$('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(2)').text();
              sub1_name = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(3)').text();
              sub1_tname = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(4) ').text();
              sub1_ct = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(5)').text();
              sub1_ca = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(6)').text();
              sub1_atp = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(7)').text();

              sub2_code=$('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(2)').text();
              sub2_name = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(3)').text();
              sub2_tname = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(4) ').text();
              sub2_ct = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(5)').text();
              sub2_ca = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(6)').text();
              sub2_atp = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(7)').text();

              sub3_code=$('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(2)').text();
              sub3_name = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(3)').text();
              sub3_tname = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(4) ').text();
              sub3_ct = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(5)').text();
              sub3_ca = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(6)').text();
              sub3_atp = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(7)').text();

              sub4_code=$('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(2)').text();
              sub4_name = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(3)').text();
              sub4_tname = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(4) ').text();
              sub4_ct = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(5)').text();
              sub4_ca = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(6)').text();
              sub4_atp = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(7)').text();

              sub5_code=$('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(2)').text();
              sub5_name = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(3)').text();
              sub5_tname = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(4) ').text();
              sub5_ct = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(5)').text();
              sub5_ca = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(6)').text();
              sub5_atp = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(7)').text();

              sub6_code=$('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(2)').text();
              sub6_name = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(3)').text();
              sub6_tname = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(4) ').text();
              sub6_ct = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(5)').text();
              sub6_ca = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(6)').text();
              sub6_atp = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(7)').text();

              sub7_code=$('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(2)').text();
              sub7_name = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(3)').text();
              sub7_tname = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(4) ').text();
              sub7_ct = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(5)').text();
              sub7_ca = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(6)').text();
              sub7_atp = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(7)').text();

              sub8_code=$('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(2)').text();
              sub8_name = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(3)').text();
              sub8_tname = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(4) ').text();
              sub8_ct = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(5)').text();
              sub8_ca = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(6)').text();
              sub8_atp = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(7)').text();


resf.setHeader('Content-Type', 'application/json');
resf.header("Access-Control-Allow-Origin", "*");
  resf.json({
        studentname:name,
        studentregno:rn,
        studentbranch:branch,
        studentsem:sem,
        sub1code:sub1_code,
 	sub1name:sub1_name,
       sub1frac:sub1_ca+"/"+sub1_ct,
        sub1atp:sub1_atp,
         sub2code:sub2_code,
	sub2name:sub2_name,
        sub2frac:sub2_ca+"/"+sub2_ct,
        sub2atp:sub2_atp,
         sub3code:sub3_code,
sub3name:sub3_name,
        sub3frac:sub3_ca+"/"+sub3_ct,
        sub3atp:sub3_atp,
         sub4code:sub4_code,
sub4name:sub4_name,
        sub4frac:sub4_ca+"/"+sub4_ct,
        sub4atp:sub4_atp,
         sub5code:sub5_code,
sub5name:sub5_name,
        sub5frac:sub5_ca+"/"+sub5_ct,
        sub5atp:sub5_atp,
         sub6code:sub6_code,
sub6name:sub6_name,
        sub6frac:sub6_ca+"/"+sub6_ct,
        sub6atp:sub6_atp,
        sub7code:sub7_code,
sub7name:sub7_name,
        sub7frac:sub7_ca+"/"+sub7_ct,
        sub7atp:sub7_atp,
         sub8code:sub8_code,
sub8name:sub8_name,
        sub8frac:sub8_ca+"/"+sub8_ct,
        sub8atp:sub8_atp

});
console.log("Should be LAST STEP, Sending response to browser");
                }
              }


request(options, callback);


});




app.listen(8081);
