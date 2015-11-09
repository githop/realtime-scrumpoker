/**
 * Created by githop on 11/2/15.
 */


let playerCard = function() {
  "use strict";

  class Ctrl {
    constructor() {
      this.game = this.gameState;
      console.log('pid, tid', this.game.currentTopic);
    }

    lastEstimate(pid) {
      this.myEstimate = this.game.playerLastEstimate(pid, this.game.currentTopic);
      console.log('my est', this.myEstimate);
      if (this.myEstimate) {
        return this.myEstimate;
      }
      this.setBackground(pid);
    }

    setBackground(id) {
      var path = 'scrumPoker/assets/pc';
      var url = `url(${path + (id + 1)}.svg)`;
      this.svgCard = {'background': url};
    }

  }

  Ctrl.$inject = [];

  return {
    restrict: 'EA',
    template: `
  <div layout="row" layout-align="start center">
    <div ng-repeat="player in ctrl.game.players track by player._id">
        <a ui-sref="poker.game.play({playerId: player._id, topicId: ctrl.game.currentTopic})">
          <div layout-padding layout-margin>
            <div class="flip-container"
                 ng-class="{ flip: ctrl.game.estimates[player._id][ctrl.game.currentTopic]._showEstimate }">
              <div class="flipper">
                <div class="front player-card md-whiteframe-4dp" ng-style="ctrl.svgCard">
                 <div class="md-whiteframe-4dp text-center" style="background-color: white;">
                  <h3>{{player._name}}</h3>
                 </div>
                </div>
                <div class="back md-whiteframe-4dp"">
                  <h3>{{ player._name}}</h3>
                  <h1>{{ctrl.lastEstimate($index)._estimate || "?"}}</h1>
                </div>
              </div>
            </div>
          </div>
        </a>
      <div>
    </div> `,
    scope: {},
    bindToController: {
      gameState: '='
    },
    controller: Ctrl,
    controllerAs: 'ctrl'
  }
};


export default playerCard;