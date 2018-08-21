var Fit = require('../js/Fit');

var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });

  app.get("/sessions", function(req,res) {
    res.status(201).send('{"data": "data imported"}');
  });
}

module.exports = appRouter;