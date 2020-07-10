"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _sequelize = require('sequelize');
var _Course = require('../models/Course'); var _Course2 = _interopRequireDefault(_Course);

exports. default = {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      subtitle: Yup.string().required(),
      startedAt: Yup.date().required(),
      description: Yup.string().required(),
      isActive: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error' });
    }

    const course = await _Course2.default.create(req.body);

    return res.json(course);
  },

  async index(req, res) {
    const courses = await _Course2.default.findAll();

    return res.json(courses);
  },

  async show(req, res) {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'id not provided' });

    const course = await _Course2.default.findByPk(id);

    if (!course) return res.status(400).json({ error: 'Course not found' });

    return res.json(course);
  },

  async search(req, res) {
    if (!req.query.q) return res.status(400).json({ error: 'query not provided' });

    const courses = await _Course2.default.findAll({
      where: {
        title: {
          [_sequelize.Op.like]: `%${req.query.q}%`,
        },
      },
    });

    return res.json(courses);
  },

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      subtitle: Yup.string(),
      startedAt: Yup.date(),
      description: Yup.string(),
      isActive: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error' });
    }

    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'id not provided' });

    const course = await _Course2.default.findByPk(id);

    if (!course) return res.status(400).json({ error: 'Course not found' });

    const {
      title, subtitle, startedAt, description, isActive,
    } = req.body;

    await course.update({
      title, subtitle, startedAt, description, isActive,
    });

    return res.json(course);
  },

  async patch(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      subtitle: Yup.string(),
      startedAt: Yup.date(),
      description: Yup.string(),
      isActive: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error' });
    }

    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'id not provided' });

    const course = await _Course2.default.findByPk(id);

    if (!course) return res.status(400).json({ error: 'Course not found' });

    await course.update(req.body);

    return res.json(course);
  },

  async delete(req, res) {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'id not provided' });

    if (!(await _Course2.default.findByPk(id))) return res.status(400).json({ error: 'Course not found' });

    _Course2.default.destroy({
      where: {
        id,
      },
    });

    return res.json({ message: 'Course deleted' });
  },

};
