var blockControl =  (function(){

     var blockArr=[],
     	lineSpacing = 20;

     return {

     	createBlock : function( lines ) {

     	      var txtArr = [],
                        lineArr = lines,
                        yLoc = this.randomY(),
                        i=0,l=lines.length;

                    for ( i;i<l;i++ ) {
                        var txt = new TextLine( lineArr[i], yLoc + (lineSpacing*(i+1)) );
                        txtArr.push( txt );
                    }

                    txtArr.reverse();

     	       blockArr.push( txtArr );

                    console.log( txtArr );

        },

        getBlock : function() {
            if( blockArr.length > 0 ) {
                return blockArr[0];
            } else {
                return 'completed';
            }
        },

        randomY : function() {
            return Math.floor( (Math.random() * 500) + lineSpacing );
        },

        //user just cleared first line in block, remove block from array
        lineEmpty : function() {
	try {

                    console.log('lineEmpty call : blockArr length is : ' + blockArr.length);
                    var firstBlock = blockArr[0];
                    console.log('first block is ');
                    console.log(firstBlock);
                    if( firstBlock.length > 0 ) {
                        firstBlock.splice(firstBlock.length-1,1);
                        console.log('removed first element in blockArr');
                        console.log('new total lines are : ' + blockArr[0].length);
                        if( firstBlock.length == 0 ) {
                            blockArr.shift();
                            console.log('block completed... remaining blocks :');
                            console.log( blockArr );
                            //done with block
                        }
                    }

            }  catch(e) {
                console.log('error : ' + e.message);
            }
        }

     }
})();