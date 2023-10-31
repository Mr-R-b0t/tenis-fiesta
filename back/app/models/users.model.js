module.exports = (connex, Sequelize) => {
  const User = connex.define(
    "user",
    {
      nickname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      token: {
        type: Sequelize.STRING,
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
      isBanned: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
      name: {
        type: Sequelize.STRING,
      },
    firstname: {
            type: Sequelize.STRING,
        },  
    adress: {
            type: Sequelize.STRING,
        },
    city: {
            type: Sequelize.STRING,
        },
    postalCode: {
            type: Sequelize.STRING,
        },
    country: {
            type: Sequelize.STRING,
        },
    phone: {
            type: Sequelize.STRING,
        },
    },
    { timestamps: true }
  );

  return User;
};
