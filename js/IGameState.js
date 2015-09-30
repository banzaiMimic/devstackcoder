function IGameState( ctx ) {

	this.ctx = ctx;

};

IGameState.prototype.init = function() {
	console.log( 'init from IGameState...');
}

IGameState.prototype.run = function() {
	console.log( 'run from IGameState...');
}

//default bg is black
IGameState.prototype.drawBg = function() {
	try {
		this.ctx.fillStyle = "#000000";
		this.ctx.fillRect(0,0, this.w,this.h );
		this.ctx.font = "15px Arial";
		this.ctx.fillStyle = "white";
	} catch (e) {
		console.log( 'error : ' + e.message );
	}
}

IGameState.prototype.drawTxt = function() {
	try {

		//block contains all lines for 1 block
		var block = blockControl.getBlock();

		if( block == 'completed' ) {
			console.log('level complete');
			return;
		}

		var i=0,l=block.length;
		for( i;i<l;i++ ) {
			var t = block[i];
			this.ctx.fillText( t.value, t.x,t.y );
			t.update();
		};

	} catch(e) {
		console.log( 'error : ' + e.message );
	}
}