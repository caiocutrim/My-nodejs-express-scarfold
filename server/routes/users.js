module.exports = function(app) {
  app.get('/', function(req, res) {
    res.send('respond with a resource');
  });
}
