/**
 * Created by githop on 10/28/15.
 */

class Game {
  constructor($mdDialog, $window, Game, gameState) {
    this.hello = 'welcome to the game!';
    this.game = gameState;
    this.addingTopic = false;
    this.$mdDialog = $mdDialog;
    this.$window = $window;
  }

  addTopic(topic) {
    this.game.addTopic(topic);
    this.showAddTopic(false);
  }

  showAddTopic(bool) {
    this.addingTopic = bool;
  }

  reset() {
    let confirm = this.$mdDialog.confirm()
      .title('Reset Game')
      .content('Warning - Will erase all topics, players, estimates etc...')
      .ok('RESET')
      .cancel('CANCEL');

    this.$mdDialog.show(confirm).then(function() {
      this.game.resetGame();
    }.bind(this), () =>{})

  }

}

Game.$inject = ['$mdDialog', '$window', 'Game', 'gameState'];

export default Game;