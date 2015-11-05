/**
 * Created by githop on 10/28/15.
 */
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');

var Player = require('./player.js');
var Topic = require('./topic.js');
var Estimate = require('./estimate.js');
var Game = require('./game.js');

var clientDir = path.resolve('../client');
var devIndex = path.resolve('../client/index.html');
var pubDir = path.resolve('../public');
var pubIndex = path.resolve('../public/index.html');
var env = process.argv[2];
var dir;
var index;

if (env === 'prod') {
  dir = pubDir;
  index = pubIndex;
} else {
  dir = clientDir;
  index = devIndex;
}

app.use(express.static(dir));
app.get('/', function(req, res, next) {
  res.sendFile(index);
});

var g = Game();

io.on('connection', function(client) {

  client.on('addPlayer', function(name) {
    var p = new Player(name);
    g.addPlayer(p);
    client.broadcast.emit('newPlayer', {newPlayer: 'Player ' + p.name + ' joined!'});
    io.emit('players', g.getPlayers());
  });

  client.on('getPlayers', function() {
    var players = g.getPlayers();
    client.emit('players', players);
  });

  client.on('addTopic', function(topic) {
    var t = new Topic(topic.title, topic.description);
    g.addTopic(t);
    var topics = g.getTopics();
    io.emit('topics', topics);
  });

  client.on('getTopics', function() {
    var topics = g.getTopics();
    client.emit('topics', topics);
  });

  client.on('getCurrentTopic', function() {
    client.emit('currentTopic', g.currentTopic());
  });

  client.on('nextTopic', function() {
    io.emit('topicAfter', g.nextTopic());
  });

  client.on('prevTopic', function() {
    io.emit('topicBefore', g.prevTopic());
  });

  client.on('doEstimate', function(data) {
    var player = g.getPlayer(parseInt(data.playerId));
    var topic = g.getTopic(data.topicId);
    var e = new Estimate(player.id, topic.id);
    e.estimate = data.val;
    g.addEstimate(e);
    io.emit('estimates', g.getEstimates());
  });

  client.on('showEstimate', function(data) {
    var e = g.getEstimate(data.estId);
    e.showEstimate();
    io.emit('estimates', g.getEstimates());
  });

  client.on('getEstimates', function() {
    client.emit('estimates', g.getEstimates());
  });

  client.on('reset', function() {
    g.reset();
  });

  client.on('error', function(e) {console.log(e)});
});


server.listen(3200);
