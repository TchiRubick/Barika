/**
 * @author Ritchi <tchi.devica@gmail.com> https://github.com/TchiRubick/barika.git
 * @description State container for Jquery, allow to hide data from DOM but remain available
 * @name jqBarika : "Barika" in Malagasy means "Baril" in English
 * 
 * 
 * 
 * 
 * @tutorial:
 * 	<script src="jquery.js"></script>
 *	<script src="jqbarika.js"></script>
 *	<div id="app"></div>
 *	<script>
 *		$( "#app" ).barika( 'setState',
 *			{
 *				'stateinitial': 'Nice state',
 *				'stateFunctional': ( arg ) => console.log( arg )
 *			}
 *		);
 *
 *		var stateinitial = $( "#app" ).barika( 'getState', 'stateinitial' );
 *		var stateFunctional = $( "#app" ).barika( 'getState', 'stateFunctional' );
 *		stateFunctional( stateinitial );
 *	</script>
 *
 * 
 * 
 * 
 * 
 * @message I'm available to work remotly, contact me.
 */








(function($) {
	var methods = {
		getState: function(instance, key) {
			var data = $(this).data("fname-options");
			return data[key];
		}
	};

	$.fn.barika = function(instance, options) {
		var args = {};
		if (typeof options === "object") {
			$.extend(args, options);
			$(this).data("fname-options", args);
		} else {
			if (methods[instance]) {
				return methods[instance].apply(this, arguments);
			}
		}
	};
})(jQuery);

