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

    <div>
      <md-card>
        <md-toolbar class="md-warn">
          <div class="md-toolbar-tools w-font">
            <h3>{{ctrl.topics[ctrl.game.currentTopic]._title}}</h3>
            <span flex></span>
            <md-button class="md-fab md-primary md-fab-top-right w-font">{{ctrl.game.currentTopic + 1}}/{{ctrl.topics.length}}</md-button>
          </div>
        </md-toolbar>
        <md-card-content>
         <md-subheader class="md-primary">Description</md-subheader>
          <p class="text-center">{{ctrl.game.topics[ctrl.game.currentTopic]._description}}</p>
        </md-card-content>
         <div ng-if="ctrl.topics.length > 1" layout="row">
          <md-button flex ng-click="ctrl.game.prevTopic()">Previous Topic</md-button>
          <md-button flex ng-click="ctrl.game.nextTopic()">Next Topic</md-button>
        </div>
      </md-card>
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