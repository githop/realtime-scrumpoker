/**
 * Created by githop on 10/31/15.
 */
import _ from 'lodash';

let GameService = function(btSocket) {

  function Game() {
    var self = this;
    this.players = [];
    this.topics = [];
    this.estimates = [];
    this.currentTopic = 0;

    this.setPlayers = function(data) {
      self.players = data;
    };

    this.setTopics = function(data) {
      console.log('newtopics', data);
      self.topics = data.topics;
    };

    this.setEstimates = function(data) {
      console.log('estimates', data);
      self.estimates = data.estimates;
    };

    this.setNextTopic = function(currentTopic) {
      console.log('nextTopic from ss', currentTopic);
      self.currentTopic = currentTopic;
    };

    this.setPrevTopic = function(currentTopic) {
      self.currentTopic = currentTopic;
    };

    this.setCurrentTopic = function(currentTopic) {
      console.log('curTop', currentTopic);
      self.currentTopic = currentTopic;
    };

    btSocket.on('players', self.setPlayers);
    btSocket.on('topics', self.setTopics);
    btSocket.on('estimates', self.setEstimates);
    btSocket.on('topicAfter', self.setNextTopic);
    btSocket.on('topicBefore', self.setPrevTopic);
    btSocket.on('currentTopic', self.setCurrentTopic);

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

    this.showEstimate = function(estId) {
      btSocket.emit('showEstimate', {estId});
    };

    this.playerLastEstimate = function(playerId, topicId) {
      var ctrl = this;
      return _.last(
        _.where(ctrl.estimates, {_playerId: parseInt(playerId,10), _topicId: topicId })
      );
    };

    this.resetGame = function() {
      btSocket.emit('reset');
    }

  }

  return new Game();

};

GameService.$inject = ['btSocket'];

export default GameService;