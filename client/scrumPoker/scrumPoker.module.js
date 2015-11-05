/**
 * Created by githop on 10/28/15.
 */

import angular from 'angular';
import ScrumPokerComponent from './scrumPoker.directive';
import LayoutModule from './layout/layout.module';
import GameModule from './game/game.module';

let scrumPokerModule = angular.module('scrumPoker', [
  LayoutModule.name,
  GameModule.name
])
  .directive('scrumPoker', ScrumPokerComponent);

angular.element(document).ready(()=> {
  angular.bootstrap(document, [scrumPokerModule.name]), {
    strictDi: true
  }
});

export default scrumPokerModule;
