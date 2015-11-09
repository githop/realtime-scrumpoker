/**
 * Created by githop on 10/28/15.
 */

import angular from 'angular';
import 'angular-ui-router';
import 'btford/angular-socket-io';
import JoinModule from './join/join.module';
import PlayModule from './play/play.module';
import template from './game.tmpl.html!text';
import addTopic from './topics/addTopic.tmpl.html!text';
import GameCtrl from './game.controller';
import GameService from './game.service';
import socketFactory from '../socket.srv';
import currentTopicCard from './topics/currentTopic.directive';
import playerCard from './player/playerCard.directive.js';

let gameModule = angular.module('scrumPoker.game', [
  'ui.router',
  'btford.socket-io',
  JoinModule.name,
  PlayModule.name
])
  .config(($stateProvider) => {
    $stateProvider
      .state('poker.game', {
        url: '/game',
        views: {
          'body@poker': {
            template,
            controller: 'GameCtrl as Game',
            resolve: {
              gameState: function(Game) {
                return Game;
              }
            }
          },
          'addTopic@poker.game': { template: addTopic }
        }
      });
  })
  .run((btSocket) => {
    btSocket.emit('getPlayers');
    btSocket.emit('getTopics');
    btSocket.emit('getCurrentTopic');
    btSocket.emit('getEstimates');
  })
  .factory('btSocket', socketFactory)
  .factory('Game', GameService)
  .directive('playerCard', playerCard)
  .directive('currentTopicCard', currentTopicCard)
  .controller('GameCtrl', GameCtrl);

export default gameModule;