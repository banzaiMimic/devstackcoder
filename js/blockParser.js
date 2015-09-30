var blockParser =  (function() {

	var levels = [ 'level0.json' ],
	currentLevel = 0;

	return {

		init : function() {
			console.log( 'blockLoader - init' );
			this.loadLevel( currentLevel, function( response ) {

				var json = JSON.parse( response );
				console.log('loaded json into : ' );
				console.log( json );
				var blocks = json.level.blocks;
				var prefix = json.level.prefix;

				var blockCount = Object.keys( blocks ).length;
				console.log(' test block count is : ' + blockCount );
				console.log( blockCount );
				console.log('blocks = ');
				console.log( blocks );

				var b0 = blocks.block0;

				var i=0,l=blockCount;
				for( i;i<l;i++ ) {
					var b = prefix+i;
					var block = blocks[ b ];
					var j=0,jl=block.length;
					var lines = [];
					console.log(block);
					console.log('---- block print ---- ');
					for( j;j<jl;j++ ) {
						console.log( block[j].line );
						lines.push( block[j].line );
					}
					blockControl.createBlock( lines );
				}

			});
		},

		loadLevel : function( index, callback ) {

			var jsonFile = levels[ index ];
			console.log('loading level at index : ' + index + ' is json : ' + jsonFile );

			var xobj = new XMLHttpRequest();
			xobj.overrideMimeType( "application/json" );
    			xobj.open( 'GET', 'js/levels/'+jsonFile, true );

    			xobj.onreadystatechange = function () {

    				if( xobj.readyState == 4 ) {
    					callback( xobj.responseText );
    				}

        		};
        
        		xobj.send( null );

      		}

    }
  })();