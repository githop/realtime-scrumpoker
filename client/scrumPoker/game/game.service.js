/**
 * Created by githop on 10/31/15.
 */
import _ from 'lodash';

let GameService = function($window, $q, btSocket) {

  function Game() {
    var self = this;
    this.players = [];
    this.topics = [];
    this.estimates = {};
    this.currentTopic = 0;

    this.setPlayers = function(data) {
      self.players = data;
    };

    this.getPlayers = function() {
      var dfd = $q.defer();

      dfd.resolve(this.players);

      return dfd.promise;
    }.bind(this);

    this.setTopics = function(data) {
      self.topics = data.topics;
    };

    this.setEstimates = function(data) {
      console.log('estimates from ss', data);
      self.estimates = data.estimates;
    };

    this.getEstimates = function() {
      var dfd = $q.defer();
      dfd.resolve(this.estimates);
      return dfd.promise;
    }.bind(this);

    this.setNextTopic = function(currentTopic) {
      self.currentTopic = currentTopic;
    };

    this.setPrevTopic = function(currentTopic) {
      self.currentTopic = currentTopic;
    };

    this.setCurrentTopic = function(currentTopic) {
      self.currentTopic = currentTopic;
    };

    this.endGame = function() {
      $window.location.href = '/';
    };

    btSocket.on('players', self.setPlayers);
    btSocket.on('topics', self.setTopics);
    btSocket.on('estimates', self.setEstimates);
    btSocket.on('topicAfter', self.setNextTopic);
    btSocket.on('topicBefore', self.setPrevTopic);
    btSocket.on('currentTopic', self.setCurrentTopic);
    btSocket.on('gameOver', self.endGame);

    this.addPlayer = function(name) {
      btSocket.emit('addPlayer', name);
    };

    this.addTopic = function(topic) {
      btSocket.emit('addTopic', topic);
    };

    this.nextTopic = function() {
      btSocket.emit('nextTopic');
    };

    this.prevTopic = function() {
      btSocket.emit('prevTopic');
    };

    this.estimateTopic = function(val, topicId, playerId) {
      btSocket.emit('doEstimate', {val, topicId, playerId})
    };

    this.showEstimate = function(playerId, topicId) {
      btSocket.emit('showEstimate', {playerId, topicId});
    };

    this.playerLastEstimate = function(pId, tId) {
      //console.log('estimates', this.estimates[pId][tId]);
      if (this.estimates[pId]) {
        if (this.estimates[pId][tId]) {
          return this.estimates[pId][tId];
        }
      }
    }.bind(this);

    this.resetGame = function() {
      btSocket.emit('reset');
    }

  }

  return new Game();

};

GameService.$inject = ['$window', '$q', 'btSocket'];

export default GameService;