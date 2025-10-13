/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/getMovies.js":
/*!******************************!*\
  !*** ./scripts/getMovies.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const renderMovies = __webpack_require__(/*! ./renderMovies */ \"./scripts/renderMovies.js\");\r\n\r\nfunction getMovies() {\r\n$.get(\"https://students-api.up.railway.app/movies\", function(data) {\r\n    renderMovies(data)\r\n    });\r\n}\r\n\r\nmodule.exports = getMovies;\r\n\n\n//# sourceURL=webpack://front/./scripts/getMovies.js?\n}");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("{const getMovies = __webpack_require__(/*! ./getMovies */ \"./scripts/getMovies.js\");\r\n\r\ngetMovies()\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?\n}");

/***/ }),

/***/ "./scripts/renderMovies.js":
/*!*********************************!*\
  !*** ./scripts/renderMovies.js ***!
  \*********************************/
/***/ ((module) => {

eval("{function renderMovies (movie) {\r\n    const contenedor = document.getElementById('contenedor-peliculas');\r\n    movie.forEach(movie => {\r\n        const card = document.createElement(\"div\");\r\n        card.className = \"movie-card\";\r\n        \r\n        card.innerHTML = `\r\n            <img src=\"${movie.poster}\" alt=\"poster de ${movie.title}\" class=\"movie-poster\"/>\r\n            <a href=\"#\">${movie.title}</a>\r\n            <div class=\"movie-overlay\">\r\n                <div class=\"movie-details\">\r\n                    <h3>${movie.title}</h3>\r\n                    <p><strong>Año:</strong> ${movie.year}</p>\r\n                    <p><strong>Director:</strong> ${movie.director}</p>\r\n                    <p><strong>Duración:</strong> ${movie.duration}</p>\r\n                    <p><strong>Género:</strong> ${movie.genre.join(\", \")}</p>\r\n                    <p class=\"rating\"><strong>Rating:</strong> ⭐ ${movie.rate}/10</p>\r\n                    <button class=\"close-btn\">✕ Cerrar</button>\r\n                </div>\r\n            </div>\r\n            `;\r\n    \r\n    const overlay = card.querySelector('.movie-overlay');\r\n    \r\n    card.querySelector('.movie-poster').onclick = () => overlay.classList.add('active');\r\n    card.querySelector('.close-btn').onclick = (e) => {\r\n        e.stopPropagation();\r\n        overlay.classList.remove('active');\r\n    };\r\n    overlay.onclick = (e) => e.target === overlay && overlay.classList.remove('active');\r\n    \r\n    contenedor.appendChild(card);\r\n});\r\n};\r\n\r\nmodule.exports = renderMovies;\r\n\n\n//# sourceURL=webpack://front/./scripts/renderMovies.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;