const seeder = require("mongoose-seed");
const userData = [
  {
    model: "User",
    documents: [
      {
        username: "Guest",
        email: "guest@gmail.com",
        password: "123456789",
      },
    ],
  },
];

const seedUser = (mongoLink) => {
  seeder.connect(mongoLink, () => {
    seeder.loadModels(["backend/src/models/User.js"]);
    seeder.populateModels(userData, function () {
      seeder.disconnect();
    });
  });
};

module.exports = { seedUser };
