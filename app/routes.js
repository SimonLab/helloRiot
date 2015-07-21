var riot = require('riot');
var fs = require('fs');
require("./../src/tags/hello.tag");
module.exports = [
   {
       method: 'GET',
       path:'/{path*}',
       handler: {
           directory: {
               path: './public'
           }
       }
   },

   {
     method: 'GET',
     path: '/hello/{name}',
     handler: function(request, reply){
       reply(riot.render('./../public/js/hello.js', {name: request.params.name}));
     }
   },

  //  {
  //    method: 'GET',
  //    path: '/issues',
  //    handler: function(request, reply){
  //      reply(riot.render('hello', {name: request.params.name}));
  //    }
  //  }
];
