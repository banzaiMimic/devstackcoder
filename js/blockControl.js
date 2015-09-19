var blockControl =  (function(){

     var blockArr=[],
     	lineSpacing = 20;

     return {

     	init : function() {
     		this.createBlock();
     	},
		
		//@todo change this to get loaded from a js file          
     	createBlock : function() {

     		var txtArr = [],
     			yLoc = this.randomY();

     		var txt0 = new TextLine( "bob's", yLoc ),
     			txt1 = new TextLine( 'burgers', yLoc+lineSpacing ),
     			txt2 = new TextLine( 'test', yLoc+(lineSpacing*2));
     		
     		txtArr.push(txt2);
     		txtArr.push(txt1);
     		txtArr.push(txt0);

     		blockArr.push( txtArr );

        },

        getBlock : function() {
        	return blockArr[0];
        },

        randomY : function() {
			return Math.floor( (Math.random() * 500) + lineSpacing );
		},

		//user just cleared first line in block, remove block from array
		lineEmpty : function() {
			console.log('lineEmpty call : blockArr length is : ' + blockArr.length);
			var firstBlock = blockArr[0];
			console.log('first block is ');
			console.log(firstBlock);
			if( firstBlock.length > 0 ) {
				firstBlock.splice(firstBlock.length-1,1);
				console.log('removed first element in blockArr');
				console.log('new total lines are : ' + blockArr[0].length);
				if( firstBlock.length == 0 ) {
					//done with block
				}
			}
		}

     }
})();