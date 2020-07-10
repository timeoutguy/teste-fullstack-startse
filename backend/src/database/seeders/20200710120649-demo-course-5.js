module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('courses', [{
    title: 'Curso NODEJS',
    subtitle: 'Aprenda NODEJS do zero',
    startedAt: new Date(),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin, tellus eu laoreet accumsan, nulla ex posuere dolor, nec fringilla elit ex id mi. Proin vel ligula mauris.',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),
  down: (queryInterface) => queryInterface.bulkDelete('courses', null, {}),
};
