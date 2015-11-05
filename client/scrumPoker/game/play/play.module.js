/**
 * Created by githop on 10/30/15.
 */

import angular from 'angular';
import 'angular-ui-router';
import template from './play.tmpl.html!text';
import PlayCtrl from './play.controller';

let playModule = angular.module('scrumPoker.game.play', [
  'ui.router'
])
  .config(($stateProvider) => {
    "use strict";
    $stateProvider
      .state('poker.game.play', {
        url: '/:playerId/play',
        views: {
          'body@poker': {
            template,
            controller: 'PlayCtrl as Play'
          }
        }
      });
  })
  .controller('PlayCtrl', PlayCtrl);

export default playModule;