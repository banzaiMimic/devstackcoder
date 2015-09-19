var keyListener =  (function(){
     return {
          
     	on : function( e ) {

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
     	}
     }
})();