var keyListener =  (function(){
     return {

          //user viewing splash screen
          onSplash : function( e ) {

               try {

                    var key = e.keyCode ? e.keyCode : e.which;
                    if( key == 13 ) {
                         //enter pressed, start game.
                         gameControl.setGameState( 1 );
                    }

               } catch (e) {
                    console.log( 'error : ' + e.message );
               }

          },
          
          //user is on level
          onGame : function( e ) {

               try {

                    var key = e.keyCode ? e.keyCode : e.which;
                    var block = blockControl.getBlock();

                    //only check first line of block
                    var line = block[ block.length-1 ],
                    txt = line.value;

                    //only check first character of first line of block
                    var code = txt.charCodeAt( 0 );
                    console.log( txt.charAt(0) + ' [firstchar] from ' + txt + ' is : ' + code );
                    if( key == code ) {
                         line.hit();
                    }
               } catch (e) {
                    console.log( 'error : ' + e.message );
               }

          }
     }
})();