(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.mSize = {}));
}(this, function (exports) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var size = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.formatSize = void 0;
	exports.formatSize = function (value) {
	    if (!value) {
	        return '0 B';
	    }
	    var units = [
	        'B',
	        'KB',
	        'MB',
	        'GB',
	        'TB',
	        'PB',
	        'EB',
	        'ZB',
	        'YB'
	    ];
	    var index = Math.floor(Math.log(value) / Math.log(1024)) || 0;
	    var size = value / Math.pow(1024, index);
	    return (size % 1 ? size.toFixed(2) : size) + ' ' + units[index];
	};
	});

	var size$1 = unwrapExports(size);
	var size_1 = size.formatSize;

	exports.default = size$1;
	exports.formatSize = size_1;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
