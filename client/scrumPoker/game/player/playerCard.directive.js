/**
 * Created by githop on 11/2/15.
 */


let playerCard = function() {
  "use strict";

  class Ctrl {
   constructor(Game) {
     var path = 'scrumPoker/assets/pc';
     var img = parseInt(this.pic, 10) + 1;
     var url = `url(${path + img}.svg)`;
     this.svgCard = {'background': url};
     this.game = Game;
     this.myEstimate = {};
   }

    lastEstimate() {
      this.myEstimate = this.game.playerLastEstimate(this.player._id, this.game.currentTopic);
      return this.myEstimate;
    }

  }

  Ctrl.$inject = ['Game'];

  return {
    restrict: 'EA',
    template: `
    <a ui-sref="poker.game.play({playerId: ctrl.player._id})">
      <div layout-padding layout-margin>
        <div class="flip-container" ng-class="{ flip: ctrl.myEstimate._showEstimate }">
          <div class="flipper">
            <div class="front player-card md-whiteframe-4dp" ng-style="ctrl.svgCard">

            </div>
            <div class="back md-whiteframe-4dp"">
              <h3>{{ctrl.player._name}}</h3>
              <h1>{{ctrl.lastEstimate()._estimate || "?"}}</h1>
            </div>
          </div>
        </div>
      </div>
    </a>`,
    scope: {},
    bindToController: {
      player: '=',
      pic: '@'
    },
    controller: Ctrl,
    controllerAs: 'ctrl'
  }
};


export default playerCard;