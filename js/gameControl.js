window.requestAnimFrame = (function(){
 return  window.requestAnimationFrame       ||
 window.webkitRequestAnimationFrame ||
 window.mozRequestAnimationFrame    ||
 function( callback ){
  window.setTimeout(callback, 1000 / 60);
};
})();

var gameControl =  (function(){

    var w = 1024,
    h = 768,
    ctx,
    txtArr=[],
    activeGameState=0,
    gameStates=[];

    return {

      init : function() {

          //blockControl.init();
          this.setupCanvas();
          this.loadLevels();
          this.createGameStates();
          this.run();

          window.onkeypress = function(e) {
              switch( activeGameState ) {
                  case 0 : keyListener.onSplash( e );
                  break;
                  default: keyListener.onGame( e );
                  break;
              }
          }

      },

      setGameState : function( index ) {
          activeGameState = index;
      },

      createGameStates : function() {
          var splashState = new SplashState( ctx );
          gameStates.push( splashState );
          var levelState = new LevelState( ctx );
          gameStates.push( levelState );
      },

      //creates block / text objects for our levels from js/levels/level#.json
      loadLevels : function() {

          blockParser.init();

      },

      run : function() {

          //call run method on the currrent activeGameState
          var gameState = gameStates[ activeGameState ];
          requestAnimFrame( gameControl.run );
          ctx.clearRect(0, 0, w, h);
          gameState.run();

      },

      drawTxt : function() {

          //block contains all lines for 1 block
          // var block = blockControl.getBlock();

          // var i=0,l=block.length;
          // for( i;i<l;i++ ) {
          //     var t = block[i];
          //     ctx.fillText( t.value, t.x,t.y );
          //     t.update();
          // };

      },

      setupCanvas : function() {
          var c = document.getElementById("myCanvas");
          ctx = c.getContext("2d");
          ctx.canvas.width = w;
          ctx.canvas.height = h;
      },

      drawBg : function() {
          ctx.fillStyle = "#000000";
          ctx.fillRect(0,0, w,h );
          ctx.font = "15px Arial";
          ctx.fillStyle = "white";
      }

  }
})();
