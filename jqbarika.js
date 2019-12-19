// @ts-nocheck
(function($) {
	var methods = {
		getState: function(instance, key) {
			var data = $(this).data("fname-options");
			return data[key];
		}
	};

	$.fn.stateContainer = function(instance, options) {
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
