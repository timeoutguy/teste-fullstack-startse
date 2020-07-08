import * as Yup from 'yup';
import { Op } from 'sequelize';
import Course from '../models/Course';

export default {
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

    const course = await Course.create(req.body);

    return res.json(course);
  },

  async index(req, res) {
    const courses = await Course.findAll();

    return res.json(courses);
  },

  async show(req, res) {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'id not provided' });

    const course = await Course.findByPk(id);

    if (!course) return res.status(400).json({ error: 'Course not found' });

    return res.json(course);
  },

  async search(req, res) {
    if (!req.query.q) return res.status(400).json({ error: 'query not provided' });

    const courses = await Course.findAll({
      where: {
        title: {
          [Op.like]: `%${req.query.q}%`,
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

    const course = await Course.findByPk(id);

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

    const course = await Course.findByPk(id);

    if (!course) return res.status(400).json({ error: 'Course not found' });

    await course.update(req.body);

    return res.json(course);
  },

  async delete(req, res) {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'id not provided' });

    if (!(await Course.findByPk(id))) return res.status(400).json({ error: 'Course not found' });

    Course.destroy({
      where: {
        id,
      },
    });

    return res.json({ message: 'Course deleted' });
  },

};
