/**
 * Created by githop on 11/4/15.
 */

class LandingCtrl {
  constructor() {
    "use strict";

    this.steps = [
      {step: 'Begin game by entering game lobby and clicking "Join Game" to create a player. Current Players are represented by cards and can be seen in the nav.'},
      {step: 'Create topic by clicking New Topic; fill in the title and description.'},
      {step: 'On your mobile device or in a new tab, Click on your playing card to get to the estimate page.'},
      {step: 'Select an estimate by tapping or clicking the desired amount, then click "Send Estimate".'},
      {step: 'To Reveal your estimate to other players click "Flip Card".'},
      {step: 'Have fun!! :D'}
    ];
  }

}

LandingCtrl.$inject = [];

export default LandingCtrl;