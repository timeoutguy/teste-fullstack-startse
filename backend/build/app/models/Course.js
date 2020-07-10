"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Course extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      title: _sequelize2.default.STRING,
      subtitle: _sequelize2.default.STRING,
      startedAt: _sequelize2.default.DATE,
      description: _sequelize2.default.TEXT,
      isActive: _sequelize2.default.BOOLEAN,
    }, {
      sequelize, modelName: 'courses',
    });
  }
}

exports. default = Course;
