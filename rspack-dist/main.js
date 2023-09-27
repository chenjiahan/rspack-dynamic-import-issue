(function() {
var __webpack_modules__ = {
"./src/index.js": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* react */"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_0__default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0_);

const LazyComponent = (0, react__WEBPACK_IMPORTED_MODULE_0_.lazy)(()=>__webpack_require__.el(/* ./Component */"./src/Component.js").then(__webpack_require__.bind(__webpack_require__, /* ./Component */"./src/Component.js")));
console.log(LazyComponent);
},

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
      id: moduleId,
loaded: false,
 exports: {}
      });
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
// Flag the module as loaded 
 module.loaded = true;
// Return the exports of the module
 return module.exports;

}
// expose the modules object (__webpack_modules__)
 __webpack_require__.m = __webpack_modules__;
// webpack/runtime/load_chunk_with_module
(function() {
var map = {"./src/Component.js": ["src_Component_js~data_image_svg_xml_svg_xmlns_http_www_w3_org_2000_svg_viewBox_0_0_16_16_vers~ab2e80","vendors~node_modules_pnpm_documate_react_0_2_0_react-dom_18_2_0_react_18_2_0_node_modules_doc~3edadc",],};

__webpack_require__.el = function(module) {
  var chunkId = map[module];
  if (chunkId === undefined) {
      return Promise.resolve();
  }
  if (chunkId.length > 1) {
    return Promise.all(chunkId.map(__webpack_require__.e));
  } else {
    return __webpack_require__.e(chunkId[0]);
  };
}

})();
// webpack/runtime/ensure_chunk
(function() {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = function (chunkId) {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce(function (promises, key) {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};

})();
// webpack/runtime/get_chunk_filename/__webpack_require__.u
(function() {
// This function allow to reference chunks
        __webpack_require__.u = function (chunkId) {
          // return url for filenames based on template
          return {"src_Component_js~data_image_svg_xml_svg_xmlns_http_www_w3_org_2000_svg_viewBox_0_0_16_16_vers~ab2e80": "src_Component_js~data_image_svg_xml_svg_xmlns_http_www_w3_org_2000_svg_viewBox_0_0_16_16_vers~ab2e80.js",}[chunkId];
        };
      
})();
// webpack/runtime/get_chunk_filename/__webpack_require__.k
(function() {
// This function allow to reference chunks
        __webpack_require__.k = function (chunkId) {
          // return url for filenames based on template
          return '' + chunkId + '.css';
        };
      
})();
// webpack/runtime/load_script
(function() {
var inProgress = {};

// var dataWebpackPrefix = "webpack:";
// loadScript function to load a script via script tag
__webpack_require__.l = function loadScript(url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (
				s.getAttribute("src") == url
				// || s.getAttribute("data-webpack") == dataWebpackPrefix + key
			) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		script = document.createElement("script");

		script.charset = "utf-8";
		script.timeout = 120;
		// script.setAttribute("data-webpack", dataWebpackPrefix + key);
		script.src = url;

		if (false && script.src.indexOf(window.location.origin + '/') !== 0) {
			script.crossOrigin = false;
		}
	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: "timeout",
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

})();
// webpack/runtime/has_own_property
(function() {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/on_chunk_loaded
(function() {
var deferred = [];
__webpack_require__.O = function (result, chunkIds, fn, priority) {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var chunkIds = deferred[i][0],
			fn = deferred[i][1],
			priority = deferred[i][2];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every(function (key) {
					return __webpack_require__.O[key](chunkIds[j]);
				})
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/global
(function() {
__webpack_require__.g = (function () {
	if (typeof globalThis === "object") return globalThis;
	try {
		return this || new Function("return this")();
	} catch (e) {
		if (typeof window === "object") return window;
	}
})();

})();
// webpack/runtime/define_property_getters
(function() {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/make_namespace_object
(function() {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
// webpack/runtime/compat_get_default_export
(function() {
// getDefaultExport function for compatibility with non-harmony modules
__webpack_require__.n = function(module) {
	// var getter = module && module.__esModule ?
    //     function() { return module['default']; } :
    //     function() { return module; }
	// __webpack_require__.d(getter, { a: getter });
	// return getter;
	return module && module.__esModule ? module['default'] : module;
};
})();
// webpack/runtime/create_fake_namespace_object
(function() {
var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__ };
var leafPrototypes;
// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 16: return value when it's Promise-like
// mode & 8|1: behave like require
__webpack_require__.t = function(value, mode) {
	if(mode & 1) value = this(value);
	if(mode & 8) return value;
	if(typeof value === 'object' && value) {
		if((mode & 4) && value.__esModule) return value;
		if((mode & 16) && typeof value.then === 'function') return value;
	}
	var ns = Object.create(null);
	__webpack_require__.r(ns);
	var def = {};
	leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
	for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
		Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return  value[key]; } });
	}
	def['default'] = function() { return value };
	__webpack_require__.d(ns, def);
	return ns;
};
})();
// webpack/runtime/node_module_decorator
(function() {
__webpack_require__.nmd = function(module) {
    module.paths = [];
    if (!module.children) module.children = [];
    return module;
}
})();
// webpack/runtime/css_loading
(function() {
var installedChunks = {"main": 0,};
var uniqueName = "webpack";
// loadCssChunkData is unnecessary
var loadingAttribute = "data-webpack-loading";
var loadStylesheet = function(chunkId, url, done, hmr) {
	var link,
		needAttach,
		key = "chunk-" + chunkId;
	if (!hmr) {
		var links = document.getElementsByTagName("link");
		for (var i = 0; i < links.length; i++) {
			var l = links[i];
			var href = l.getAttribute("href") || l.href;
			if (href && !href.startsWith(__webpack_require__.p)) {
				href =
					__webpack_require__.p + (href.startsWith("/") ? href.slice(1) : href);
			}
			if (
				l.rel == "stylesheet" &&
				((href && href.startsWith(url)) ||
					l.getAttribute("data-webpack") == uniqueName + ":" + key)
			) {
				link = l;
				break;
			}
		}
		if (!done) return link;
	}
	if (!link) {
		needAttach = true;
		link = document.createElement("link");
		link.setAttribute("data-webpack", uniqueName + ":" + key);
		link.setAttribute(loadingAttribute, 1);
		link.rel = "stylesheet";
		link.href = url;

		if (false && link.href.indexOf(window.location.origin + '/') !== 0) {
			link.crossOrigin = false;
		}
	}
	var onLinkComplete = function (prev, event) {
		link.onerror = link.onload = null;
		link.removeAttribute(loadingAttribute);
		clearTimeout(timeout);
		if (event && event.type != "load") link.parentNode.removeChild(link);
		done(event);
		if (prev) return prev(event);
	};
	if (link.getAttribute(loadingAttribute)) {
		var timeout = setTimeout(
			onLinkComplete.bind(null, undefined, { type: "timeout", target: link }),
			120000
		);
		link.onerror = onLinkComplete.bind(null, link.onerror);
		link.onload = onLinkComplete.bind(null, link.onload);
	} else onLinkComplete(undefined, { type: "load", target: link });
	hmr
		? hmr.parentNode.insertBefore(link, hmr)
		: needAttach && document.head.appendChild(link);
	return link;
};
__webpack_require__.f.css = function (chunkId, promises) {
	// css chunk loading
	var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
		? installedChunks[chunkId]
		: undefined;
	if (installedChunkData !== 0) {
		// 0 means "already installed".

		// a Promise means "currently loading".
		if (installedChunkData) {
			promises.push(installedChunkData[2]);
		} else {
			if (['vendors~node_modules_pnpm_documate_react_0_2_0_react-dom_18_2_0_react_18_2_0_node_modules_doc~3edadc'].indexOf(chunkId) > - 1) {
				// setup Promise in chunk cache
				var promise = new Promise(function (resolve, reject) {
					installedChunkData = installedChunks[chunkId] = [resolve, reject];
				});
				promises.push((installedChunkData[2] = promise));

				// start chunk loading
				var url = __webpack_require__.p + __webpack_require__.k(chunkId);
				// create error before stack unwound to get useful stacktrace later
				var error = new Error();
				var loadingEnded = function (event) {
					if (__webpack_require__.o(installedChunks, chunkId)) {
						installedChunkData = installedChunks[chunkId];
						if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
						if (installedChunkData) {
							if (event.type !== "load") {
								var errorType = event && event.type;
								var realSrc = event && event.target && event.target.src;
								error.message =
									"Loading css chunk " +
									chunkId +
									" failed.\n(" +
									errorType +
									": " +
									realSrc +
									")";
								error.name = "ChunkLoadError";
								error.type = errorType;
								error.request = realSrc;
								installedChunkData[1](error);
							} else {
								// loadCssChunkData(__webpack_require__.m, link, chunkId);
								installedChunkData[0]();
							}
						}
					}
				};
				var link = loadStylesheet(chunkId, url, loadingEnded);
			} else installedChunks[chunkId] = 0;
		}
	}
};
// TODO: diffrent with webpack
// webpack using `loadCssChunkData` and detect css variables to add install chunk.
// Because rspack the css chunk is always generate one js chunk, so here use js chunk to add install chunk.
var loadCssChunkCallback = function (parentChunkLoadingFunction, data) {
	var chunkIds = data[0];
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (var i = 0; i < chunkIds.length; i++) {
		if (installedChunks[chunkIds[i]] === undefined) {
			installedChunks[chunkIds[i]] = 0;
		}
	}
};
var chunkLoadingGlobal = self['webpackChunkrspack_repro'] = self['webpackChunkrspack_repro'] || [];
chunkLoadingGlobal.push = loadCssChunkCallback.bind(
	null,
	chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
);
})();
// webpack/runtime/jsonp_chunk_loading
(function() {
var installedChunks = {"main": 0,};
__webpack_require__.f.j = function (chunkId, promises) {
	// JSONP chunk loading for javascript
	var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
		? installedChunks[chunkId]
		: undefined;
	if (installedChunkData !== 0) {
		// 0 means "already installed".

		// a Promise means "currently loading".
		if (installedChunkData) {
			promises.push(installedChunkData[2]);
		} else {
			if (true) {
				// setup Promise in chunk cache
				var promise = new Promise(function (resolve, reject) {
					installedChunkData = installedChunks[chunkId] = [resolve, reject];
				});
				promises.push((installedChunkData[2] = promise));

				// start chunk loading
				var url = __webpack_require__.p + __webpack_require__.u(chunkId);
				// create error before stack unwound to get useful stacktrace later
				var error = new Error();
				var loadingEnded = function (event) {
					if (__webpack_require__.o(installedChunks, chunkId)) {
						installedChunkData = installedChunks[chunkId];
						if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
						if (installedChunkData) {
							var errorType =
								event && (event.type === "load" ? "missing" : event.type);
							var realSrc = event && event.target && event.target.src;
							error.message =
								"Loading chunk " +
								chunkId +
								" failed.\n(" +
								errorType +
								": " +
								realSrc +
								")";
							error.name = "ChunkLoadError";
							error.type = errorType;
							error.request = realSrc;
							installedChunkData[1](error);
						}
					}
				};
				__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
			} else installedChunks[chunkId] = 0;
		}
	}
};
__webpack_require__.O.j = function (chunkId) {
	return installedChunks[chunkId] === 0;
};
// install a JSONP callback for chunk loading
var webpackJsonpCallback = function (parentChunkLoadingFunction, data) {
	var chunkIds = data[0],
	moreModules = data[1],
	runtime = data[2];
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId,
		chunkId,
		i = 0;
	if (chunkIds.some(function(id) { return installedChunks[id] !== 0 })) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	return __webpack_require__.O(result);
};

var chunkLoadingGlobal = self['webpackChunkrspack_repro'] = self['webpackChunkrspack_repro'] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(
	null,
	chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
);

})();
// webpack/runtime/auto_public_path
(function() {

    var scriptUrl;
    if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
    var document = __webpack_require__.g.document;
    if (!scriptUrl && document) {
      if (document.currentScript) scriptUrl = document.currentScript.src;
        if (!scriptUrl) {
          var scripts = document.getElementsByTagName("script");
              if (scripts.length) scriptUrl = scripts[scripts.length - 1].src;
        }
      }
    // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration",
    // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.',
    if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
    scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    __webpack_require__.p = scriptUrl
    
})();
var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors~node_modules_pnpm_documate_react_0_2_0_react-dom_18_2_0_react_18_2_0_node_modules_doc~3edadc",] , function() { return __webpack_require__("./src/index.js") });
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})()
