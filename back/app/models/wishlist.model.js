module.exports = (connex, Sequelize) => {
    const Wishlist = connex.define('wishlist', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        items: {
            type: Sequelize.JSON,
        },
        date_of_creation: {
            type: Sequelize.DATE,
        },
    });
    return Wishlist;
}