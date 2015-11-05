/**
 * Created by githop on 10/28/15.
 */

class Game {
  constructor(Game) {
    this.hello = 'welcome to the game!';
    this.game = Game;
    this.addingTopic = false;
  }

  addTopic(topic) {
    this.game.addTopic(topic);
    this.showAddTopic(false);
  }

  showAddTopic(bool) {
    this.addingTopic = bool;
  }

}

Game.$inject = ['Game'];

export default Game;