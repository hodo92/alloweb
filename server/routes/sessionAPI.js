var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('cookie-session');

///////////////////////////////////////////////////////////////////////////////////////// MIDDLEWARE

var app = express();

// Needed to handle JSON posts
app.use(bodyParser.json());

// Cookie parsing needed for sessions
app.use(cookieParser('notsosecretkey'));

// Session framework
app.use(session({secret: 'notsosecretkey123'}));

// Consider all URLs under /public/ as static files, and return them raw.
app.use(express.static(__dirname + '/public'));

/////////////////////////////////////////////////////////////////////////////////////////// HANDLERS

function getUser(req, res) {
  if (req.session.user) {
    return res.json({ user: req.session.user });
  }
  else {
    return res.json({ user: '' });
  }
}

function setUser(req, res) {
  if(!req.body.hasOwnProperty('user')) {
    res.statusCode = 400;
    return res.json({ error: 'Invalid message' });
  }
  else {
    req.session.user = req.body.user;
    return res.json({ user: req.body.user });
  }
}

function logout(req, res) {
  req.session = null;
  return res.json({});
}

///////////////////////////////////////////////////////////////////////////////////////////// ROUTES

app.get('/user', getUser);
app.post('/user', setUser);
app.get('/logout', logout);

////////////////////////////////////////////////////////////////////////////////////// SERVER LISTEN
var port = process.env.PORT || 3000;
app.listen(port, function () { console.log("Listening on port " + port); });