'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
      name: "Strafwerk Amsterdam 2020",
      description: "Line-up: Floorplan, Benny Rodrigues",
      imgUrl: "https://whatsupwithamsterdam.com/ezoimgfmt/i2.wp.com/whatsupwithamsterdam.com/cms/wp-content/uploads/2019/04/Festivalsamsterdam2019.jpg?resize=1024%2C584&ssl=1&ezimgfmt=ng:webp/ngcb1",
      start_date: "2020-02-29",
      end_date: "2020-02-29",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
