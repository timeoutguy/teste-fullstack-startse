"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CourseController = require('./app/controllers/CourseController'); var _CourseController2 = _interopRequireDefault(_CourseController);

const routes = _express.Router.call(void 0, );

routes.get('/courses', _CourseController2.default.index);
routes.get('/courses/find', _CourseController2.default.search);
routes.get('/courses/:id', _CourseController2.default.show);
routes.post('/courses', _CourseController2.default.store);
routes.put('/courses/:id', _CourseController2.default.update);
routes.delete('/courses/:id', _CourseController2.default.delete);

exports. default = routes;
