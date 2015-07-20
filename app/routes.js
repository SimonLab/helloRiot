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
      //  var hello = fs.readFileSync(__dirname + '/../src/tags/hello.tag', 'utf8');
      var name = request.params.name;
      console.log(name);
       var hello = riot.render('hello', {name: name});
       console.log(hello);
       reply(hello);
     }
   }
];
