var test = require('tape');
var server = require('./../app/server.js');

test("Render side Hello ", function(t){
  var options = {
    method: "GET",
    url: "/hello/DWYL"
  };

  server.inject(options, function(response){
    t.equal(response.statusCode, 200, "Everything Works as expected!");
    t.equal(response.result, '<hello><h1>Hello There DWYL</h1></hello>', "Response is Hello There DWYL");
    server.stop();
    t.end();
  });
});
