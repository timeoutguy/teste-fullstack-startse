import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Course from '../app/models/Course';

const connection = new Sequelize(dbConfig);

Course.init(connection);

export default connection;
