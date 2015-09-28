function SplashState( ctx ) {
	IGameState.call( this, ctx );
	this.w = ctx.canvas.width;
	this.h = ctx.canvas.height;
};

SplashState.prototype = Object.create( IGameState.prototype );

SplashState.prototype.run = function() {
	//console.log( 'run called from SplashState' );
	this.drawBg();
	this.drawTxt();
}

SplashState.prototype.drawTxt = function() {
	this.ctx.fillText( 'Welcome to devstackcoder - press enter to start!', 200, 200 );
}