var _ = require('lodash');

var Game = function() {
  var _topics = [];
  var _players = [];
  var _estimates = [];
  var nextId = 0;
  var nextTopicId = 0;
  var nextEstimateId = 0;
  var _currentTopic = 0;

  function addEstimate(e) {
    e.id = nextEstimateId;
    _estimates.push(e);
    nextEstimateId++;
  }

  function getEstimate(id) {
    var estimate = _.find(_estimates, {_id: id});
    if (estimate) {
      return estimate;
    }
  }

  function getEstimates() {
    return {estimates: _estimates};
  }

  function addTopic(topic) {
    topic.id = nextTopicId;
    _topics.push(topic);
    nextTopicId++;
  }

  function getTopic(id) {
    var topic = _.find(_topics, {_id: id});
    if (topic) {
      return topic;
    }
  }

  function getTopics() {
    return {topics: _topics};
  }

  function nextTopic() {
    if (_currentTopic < nextTopicId - 1) {
      _currentTopic++
    }
    return currentTopic();
  }

  function prevTopic() {
    if (_currentTopic != 0) {
      _currentTopic--;
    }
    return currentTopic();
  }

  function currentTopic() {
    return _currentTopic;
  }

  function addPlayer(player) {
    player.id = nextId;
    _players.push(player);
    nextId++;
  }

  function getPlayer(id) {
    var player = _.find(_players, {_id: id});
    return player;
  }

  function getPlayers() {
    return _players;
  }

  function reset() {
    _topics = [];
    _players = [];
    _estimates = [];
    nextId = 0;
    nextTopicId = 0;
    nextEstimateId = 0;
    _currentTopic = 0;
  }

  return {
    addEstimate: addEstimate,
    getEstimate: getEstimate,
    getEstimates: getEstimates,
    addTopic: addTopic,
    getTopics: getTopics,
    getTopic: getTopic,
    currentTopic: currentTopic,
    nextTopic: nextTopic,
    prevTopic: prevTopic,
    addPlayer: addPlayer,
    getPlayer: getPlayer,
    getPlayers: getPlayers,
    reset: reset
  }
};

module.exports = Game;