const db = require("../models");
const Wishlist = db.wishlist;
const OP = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Wishlist.findAll().then((data) => {
        res.send(data);
    });
    }

exports.create = (req, res) => {
    Wishlist.create(req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((e) => {
            res.status(500).send({
                message: "Could not insert into the table",
            });
        });
}

exports.findOne = (req, res) => {
    const id = req.params.id;
    Wishlist.findByPk(id)
        .then((data) => {
            res.send(data);
        })
        .catch((e) => {
            res.status(500).send({
                message: "Could not find the data",
            });
        });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Wishlist.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Wishlist was deleted",
                });
            } else {
                res.send({
                    message: "Could not delete",
                });
            }
        })
        .catch((e) => {
            res.status(500).send({
                message: "Database error",
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;
    Wishlist.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Wishlist was updated",
                });
            } else {
                res.send({
                    message: "Could not update",
                });
            }
        })
        .catch((e) => {
            res.status(500).send({
                message: "Database error",
            });
        });
}

exports.findAllByUserId = (req, res) => {
    const userId = req.params.userId;
    Wishlist.findAll({
        where: { userId: userId },
    })
        .then((data) => {
            res.send(data);
        })
        .catch((e) => {
            res.status(500).send({
                message: "Could not find the data",
            });
        });
}

exports.deleteByUserId = (req, res) => {
    const userId = req.params.userId;
    Wishlist.destroy({
        where: { userId: userId },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Wishlist was deleted",
                });
            } else {
                res.send({
                    message: "Could not delete",
                });
            }
        })
        .catch((e) => {
            res.status(500).send({
                message: "Database error",
            });
        });
}

exports.updateByUserId = (req, res) => {
    const userId = req.params.userId;
    Wishlist.update(req.body, {
        where: { userId: userId },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Wishlist was updated",
                });
            } else {
                res.send({
                    message: "Could not update",
                });
            }
        })
        .catch((e) => {
            res.status(500).send({
                message: "Database error",
            });
        });
}
