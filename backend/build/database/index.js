"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Course = require('../app/models/Course'); var _Course2 = _interopRequireDefault(_Course);

const connection = new (0, _sequelize2.default)(_database2.default);

_Course2.default.init(connection);

exports. default = connection;
