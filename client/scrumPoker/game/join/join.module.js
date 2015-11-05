/**
 * Created by githop on 10/30/15.
 */

import angular from 'angular';
import 'angular-ui-router';
import template from './join.tmpl.html!text';
import JoinCtrl from './join.controller';

let joinModule = angular.module('scrumPoker.game.join', [
  'ui.router'
])
  .config(($stateProvider) => {
    $stateProvider
      .state('poker.game.join', {
        url: '/join',
        views: {
          'body@poker': {
            template,
            controller: 'JoinCtrl',
            controllerAs: 'Join'
          }
        }
      })
  })
  .controller('JoinCtrl', JoinCtrl);

export default joinModule;