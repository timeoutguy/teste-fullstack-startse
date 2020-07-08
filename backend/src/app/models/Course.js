import Sequelize, { Model } from 'sequelize';

class Course extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      subtitle: Sequelize.STRING,
      startedAt: Sequelize.DATE,
      description: Sequelize.TEXT,
      isActive: Sequelize.BOOLEAN,
    }, {
      sequelize, modelName: 'courses',
    });
  }
}

export default Course;
