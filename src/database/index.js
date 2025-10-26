import Sequelize from 'sequelize';
// import Product from '../app/models/Product';

import User from '../app/models/User.js';
import configDatabase from '../config/database.cjs';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
