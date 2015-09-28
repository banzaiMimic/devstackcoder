window.requestAnimFrame = (function(){
   return  window.requestAnimationFrame       ||
   window.webkitRequestAnimationFrame ||
   window.mozRequestAnimationFrame    ||
   function( callback ){
        window.setTimeout(callback, 1000 / 60);
   };
})();

var canvasControl =  (function(){

     var w = 1024,
     h = 768,
     ctx,
     txtArr=[];

     return {

      init : function() {

          blockControl.init();
          this.setupCanvas();
          this.mainLoop();

          window.onkeypress = function(e) {
             keyListener.on( e );
        }

   },

   mainLoop : function() {

        requestAnimFrame( canvasControl.mainLoop );
        ctx.clearRect(0, 0, w, h);
        canvasControl.drawBg();
        canvasControl.drawTxt();

   },

   drawTxt : function() {

     //block contains all lines for 1 block
     var block = blockControl.getBlock();

     var i=0,l=block.length;
     for( i;i<l;i++ ) {
        var t = block[i];
        ctx.fillText( t.value, t.x,t.y );
        t.update();
   };

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
