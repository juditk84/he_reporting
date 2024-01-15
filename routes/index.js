var express = require('express');
var router = express.Router();
const models = require("../models");
const { Op, Association } = require("sequelize");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

// get all employees
router.get("/employees", async (req, res) => {
  try {
    const actions = await models.Employee.findAll({
      include: [
        {
          model: models.MonthlyIncome,
        },
      ],
    });
    res.send(actions);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
