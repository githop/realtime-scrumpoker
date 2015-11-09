/**
 * Created by githop on 10/30/15.
 */
import _ from 'lodash';

class Play {
  constructor($stateParams, $state, $timeout, Game, gameState) {
    this.game = gameState;
    this.playerId = $stateParams.playerId;
    this.topicId = $stateParams.topicId;
    console.log('RESOLVE', gameState);
    this.tileValues = [0, 0.5, 1, 2, 3, 5, 8, 13, 20];
    if (_.has(gameState.estimates, [this.playerId, this.topicId])) {
      this.latestEst = this.game.playerLastEstimate(this.playerId, this.topicId)._estimate;
    }

    Game.getPlayers().then(function(p) {
      if (p.length === 0) {
        console.log('redirecting game', p);
        $state.go('poker.game');
      }
    });
  }

  estimate(val, topicId, playerId) {
    this.latestEst = val;
    this.game.estimateTopic(val, topicId, playerId);
    this.game.playerLastEstimate(playerId, topicId);
    console.log('again est latest', this.latestEst);
  }

  showEstimate(playerId, topicId) {
    //console.log('latestEst', lastEst);
    //this.latestEst = lastEst._estimate;
    this.game.showEstimate(playerId, topicId);
  }

}

Play.$inject = ['$stateParams', '$state', '$timeout', 'Game', 'gameState'];

export default Play;