(function () {
	'use strict';

	var Util = {
		capitalize: function (value) {
			return (value || '').replace(/^(\w)/, function (match) {
				return match.toUperCase();
			});
		}
	};
})();
