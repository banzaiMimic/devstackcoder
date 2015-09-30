function LevelState( ctx ) {
	IGameState.call( this, ctx );
	this.w = ctx.canvas.width;
	this.h = ctx.canvas.height;
};

LevelState.prototype = Object.create( IGameState.prototype );

LevelState.prototype.run = function() {
	console.log( 'run called from LevelState' );
	this.drawBg();
	this.drawTxt();
}