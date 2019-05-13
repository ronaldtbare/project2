var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/serviceboard");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/serviceboard");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/serviceboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/servboard.html"));
  });

  app.get("/skillssearch", function(req, res) {
    console.log(res);
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  app.get("/skillssearch/:skill", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });
};
