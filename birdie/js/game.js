// Generated by CoffeeScript 1.7.1
(function() {
  window.Game = (function() {
    function Game(canvas) {
      this.context = canvas.getContext("2d");
      this.width = canvas.width;
      this.height = canvas.height;
      this.keyPressed = {};
      this.keys = {
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
      };
      this.entities = [];
      this.isGameOver = false;
      $(canvas).on("keydown keyup", (function(_this) {
        return function(e) {
          var keyName, keyVal, _ref;
          _ref = _this.keys;
          for (keyVal in _ref) {
            keyName = _ref[keyVal];
            _this.keyPressed[keyName] = {};
            _this.keyPressed[keyName]['keydown'] = false;
            _this.keyPressed[keyName]['keyup'] = false;
          }
          keyName = _this.keys[e.which];
          if (keyName) {
            _this.keyPressed[keyName]['keydown'] = e.type === 'keydown';
            _this.keyPressed[keyName]['keyup'] = e.type === 'keyup';
            return e.preventDefault();
          }
        };
      })(this));
    }

    Game.prototype.draw = function() {
      return this.entities.forEach((function(_this) {
        return function(entity) {
          if (entity.draw) {
            return entity.draw(_this.context);
          }
        };
      })(this));
    };

    Game.prototype.update = function() {
      return this.entities.forEach((function(_this) {
        return function(entity) {
          if (entity.update) {
            return entity.update();
          }
        };
      })(this));
    };

    Game.prototype.gameOver = function(isGameOver) {
      this.isGameOver = isGameOver;
      if (this.isGameOver) {
        document.getElementById('game-over').style.display = "block";
        return document.getElementById('game-over-overlay').style.display = "block";
      } else {
        document.getElementById('game-over').style.display = "none";
        return document.getElementById('game-over-overlay').style.display = "none";
      }
    };

    Game.prototype.start = function() {
      var fps, interval;
      fps = 60;
      interval = 1000 / fps;
      return setInterval((function(_this) {
        return function() {
          if (!_this.isGameOver) {
            _this.update();
            return _this.draw();
          }
        };
      })(this), interval);
    };

    return Game;

  })();

}).call(this);
