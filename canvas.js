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
     		
     		this.setupCanvas();
     		this.mainLoop();
     		this.createTxt( "bob" );

     		window.onkeypress = function(e) {
     			canvasControl.keyListener( e );
     		}

     	},

     	getTxtArr : function() {
     		return txtArr;
     	},

     	mainLoop : function() {

     		requestAnimFrame( canvasControl.mainLoop );
     		ctx.clearRect(0, 0, w, h);
     		canvasControl.drawBg();
     		canvasControl.drawTxt();

     	},

     	drawTxt : function() {

     		var i=0,l=txtArr.length;
     		for( i;i<l;i++ ) {
     			var t = txtArr[i];
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
     	},

     	createTxt : function( txt ) {

     		var txt = new text( txt );
     		txtArr.push(txt);
     		
     	}

     }
})();
