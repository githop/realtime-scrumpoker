function Estimate(pId, tId) {
  this._playerId = pId || 0;
  this._topicId = tId || 0;
  this._id = 0;
  this._estimate = 0;
  this._showEstimate = false;
}

Object.defineProperties(Estimate.prototype, {
  'playerId': {
    get: function() { return this._playerId; },
    set: function(pId) { this._playerId = pId; }
  },
  'topicId': {
    get: function() { return this._topicId; },
    set: function(tId) { this._topicId = tId; }
  },
  'id': {
    get: function() { return this._id; },
    set: function(id) { this._id = id; }
  },
  'estimate': {
    get: function() { return this._estimate; },
    set: function(e) { this._estimate = e; }
  },
  'show': {
    get: function() { return this._showEstimate },
    set: function(e) { this._showEstimate = e; }
  }
});

Estimate.prototype.showEstimate = function() {
  this.show = this.show === false;
};

module.exports = Estimate;