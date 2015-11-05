/**
 * Created by githop on 10/30/15.
 */

class Play {
  constructor($stateParams, $state, $timeout, Game) {
    this.game = Game;
    this.playerId = $stateParams.playerId;
    this.latestEstimate;
    this.selectedEst;
    this.tileValues = [0, 0.5, 1, 2, 3, 5, 8, 13, 20];
    $timeout(() => {
      if (Game.players.length === 0) {
        $state.go('poker.game')
      }
    }, 500)
  }

  selectEstimate(val) {
    console.log('selecting!', val);
    this.selectedEst = val;
  }

  estimate(val, topicId, playerId) {
    this.game.estimateTopic(val, topicId, playerId);
  }

  showEstimate(playerId, topicId) {
    var latestEstimate = this.game.playerLastEstimate(playerId, topicId);
    this.game.showEstimate(latestEstimate._id);
  }

}

Play.$inject = ['$stateParams', '$state', '$timeout', 'Game'];

export default Play;