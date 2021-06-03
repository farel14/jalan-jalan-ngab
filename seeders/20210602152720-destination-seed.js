'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Destinations',[{
      location:"bandung kawah putih",
      price:"100000",
      transport:"mobil",
      lodging:"villa",
      photo:"https://www.wisataidn.com/wp-content/uploads/2020/07/Sejarah-kawah-putih-ciwidey-750x450.jpg",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      location:"bandung pasar apung",
      price:"50000",
      transport:"mobil",
      lodging:"villa",
      photo:"https://awsimages.detik.net.id/customthumb/2013/07/26/1519/181815_bandungfloating1.jpg?w=780&q=90",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      location:"bandung moko",
      price:"75000",
      transport:"mobil",
      lodging:"villa",
      photo:"https://www.pegipegi.com/travel/wp-content/uploads/2017/05/Wisata-Kuliner-Bandung.png",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      location:"bandung punclut",
      price:"50000",
      transport:"mobil",
      lodging:"villa",
      photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3g0mvV0cA3lOafn3AIH64KBpOzuENakhMXg&usqp=CAU",
      createdAt:new Date(),
      updatedAt:new Date()
    },])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Destinations',null,{})
  }
};
