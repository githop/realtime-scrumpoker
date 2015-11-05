/**
 * Created by githop on 10/28/15.
 */

import angular from 'angular';

let ScrumPokerComponent = () => {
  return {
    template: `<div class="scrumPoker">
                    <div ui-view></div>
                 </div>`,
    restrict: 'E'
  }
};

export default ScrumPokerComponent;