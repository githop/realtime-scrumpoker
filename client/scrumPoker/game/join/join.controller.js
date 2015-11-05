/**
 * Created by githop on 10/30/15.
 */

class Join {
  constructor($state, Game) {
    this.message = 'Join Game!';
    this.Game = Game;
    this.$state = $state;
  }

  addPlayer(name) {
    this.Game.addPlayer(name);
    this.$state.go('poker.game');
  }
}

Join.$inject = ['$state', 'Game'];

export default Join;