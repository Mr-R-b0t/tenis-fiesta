module.exports = (connex, Sequelize) => {
    const checkout = connex.define("checkout", {
        name: {
            type: Sequelize.STRING,
        },
        adress: {
            type: Sequelize.STRING,
        },
        city: {
            type: Sequelize.STRING,
        },
        date: {
            type: Sequelize.DATE,
        },
        userID: {
            type: Sequelize.INTEGER,
        },
        cart: {
            type: Sequelize.JSON,
        },
    });
    return checkout;

};