function Player(name) {
  this._name = name;
  this._id = 0;
}

Object.defineProperties(Player.prototype, {
    'name': {
      get: function() { return this._name; },
      set: function(name) { this._name = name; }
    },
    'id': {
      get: function() { return this._id; },
      set: function(id) { this._id = id; }
    }
  }
);

module.exports = Player;