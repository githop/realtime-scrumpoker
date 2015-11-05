function Topic(title, description) {
  this._id = 0;
  this._title = title;
  this._description = description;
}

Object.defineProperties(Topic.prototype, {
  'id': {
    get: function() { return this._id; },
    set: function(id) { this._id = id; }
  },
  'title': {
    get: function() { return this._title; },
    set: function(title) { this._title = title; }
  },
  'description': {
    get: function() { return this._description; },
    set: function(description) { this._description = description; }
  }
});

module.exports = Topic;