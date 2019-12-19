(function($) {
	var methods = {
		getState: function(instance, key) {
			var data = $(this).data("fname-options");
			return data[key];
		}
	};

	$.fn.barika = function(instance, options) {
		if (instance === "setState") {
			$(this).data("fname-options", options);
		} else {
			if (methods[instance]) {
				return methods[instance].apply(this, arguments);
			}
		}
	};
})(jQuery);
