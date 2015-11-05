/**
 * Created by githop on 11/3/15.
 */

let currentTopic = function() {
  "use strict";

  class Ctrl {
    constructor(Game) {
      this.game = Game;
    }
  }

  Ctrl.$inject = ['Game'];

  return {
    restrict: 'EA',
    template: `
    <div layout="row" layout-align="center" ng-if="ctrl.topics.length">
    <div ng-if="ctrl.topics.length > 1">
      <md-button ng-click="ctrl.game.prevTopic()" class="md-fab"> < </md-button>
    </div>
    <div flex="80">
      <md-card>
        <md-toolbar class="md-warn">
          <div class="md-toolbar-tools">
            <h1>{{ctrl.topics[ctrl.game.currentTopic]._title}}</h1>
            <span flex></span>
            <span>{{ctrl.game.currentTopic + 1}} of {{ctrl.topics.length}}</span>
          </div>
        </md-toolbar>
        <md-card-content>
          <p>{{ctrl.game.topics[ctrl.game.currentTopic]._description}}</p>
        </md-card-content>
      </md-card>
    </div>
    <div ng-if="ctrl.topics.length > 1">
    <md-button ng-click="ctrl.game.nextTopic()" class="md-fab"> > </md-button>
    </div>
  </div>`,
    scope: {},
    bindToController: {
      topics: '='
    },
    controller: Ctrl,
    controllerAs: 'ctrl'
  }
};

export default currentTopic;