function TextLine( str, yloc ) {
	
	this.value = str;
	this.x=1024;
	this.y=yloc;

}

TextLine.prototype = {
	update : function() {
		if( this.x > 0 ) {
			this.x--;
		}
	},
	//when user keys first letter in line, remove first character in value
	hit : function() {

		this.value = this.value.slice(1,this.value.length);
		console.log('value length is : ' + this.value.length );
		if( this.value.length == 0 ) {
			blockControl.lineEmpty();
		}

	}
}