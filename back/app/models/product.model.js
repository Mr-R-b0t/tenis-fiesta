module.exports = (connex, Sequelize) => {
    const Product = connex.define("product", {
        name: {
            type: Sequelize.STRING,
        },
        photo: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.REAL,
        },
        description: {
            type: Sequelize.TEXT,
        },
        type: {
            type: Sequelize.STRING,
        },
        quantity: {
            type: Sequelize.INTEGER,
        },
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        rating: {
            type: Sequelize.INTEGER,
        },
    });
    return Product;
};