riot.tag('hello', '<h1>This part is rendered on the server side!</h1> <h1>Hello There {opts.name}</h1>', function(opts) {
  console.log("hello rendered");

});
