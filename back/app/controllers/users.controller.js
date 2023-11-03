const db = require("../models");
const userModel = require("../models/users.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = db.users;
const OP = db.Sequelize.Op
const https = require("http");

exports.findAll = (req, res) => {
  User.findAll().then((data) => {
    res.send(data);
  });
};

exports.create = async (req, res) => {
  if (!req.body.nickname || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "User must have name, email and phone!",
    });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  await User.create({
    nickname: req.body.nickname,
    email: req.body.email,
    password: hashPassword,
    isAdmin: false,
    isBanned: false,
    name: req.body.name,
    firstname: req.body.firstname,
    adress: req.body.adress,
    city: req.body.city,
    postalCode: req.body.postalCode,
    country: req.body.country,
    phone: req.body.phone,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not insert the data",
      });
    });
};

exports.findOne = async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } });

  if (!user) {
    return res.status(400).send({
      message: "Username not found",
    });
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({
      message: "password incorrect",
    });
  }
  const token = jwt.sign({ id: user.id }, "secret");
  // console.log(token)
  //withCredentials = true on the client side (http)
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  user.update({
    token: token,
  });
  const { password, ...data } = await user.toJSON();
  res.send({
    token: token,
    user: data,
  });
};

exports.auth = async (req, res) => {
  try {
    const cookie = req.cookies["jwt"];
    const claims = jwt.verify(cookie, "secret");

    if (!claims) {
      return res.status(401).send({
        message: "unauthenticated",
      });
    }

    const user = await User.findOne({ id: claims.id });
    const { password, ...data } = await user.toJSON();
    //console.log(data)
    res.send(data);
  } catch (e) {
    return res.status(401).send({
      message: "unauthenticated",
    });
  }
};

exports.logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });

  res.send({
    message: "success",
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was deleted",
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
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(400).send({
      message: "User not found",
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  await user.update({
    nickname: req.body.nickname,
    email: req.body.email,
    password: hashPassword,
    isAdmin: req.body.isAdmin,
    isBanned: req.body.isBanned,
  });
  res.send({
    message: "success",
  });
};

exports.updateBanned = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(400).send({
      message: "User not found",
    });
  }
  await user.update({
    isBanned: req.body.isBanned,
  });
  res.send({
    message: "success",
  });
};

exports.updateAdmin = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(400).send({
      message: "User not found",
    });
  }
  await user.update({
    isAdmin: req.body.isAdmin,
  });
  res.send({
    message: "success",
  });
};
