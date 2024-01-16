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

router.get("/projects", async (req, res) => {
  try {
    const projects = await models.Project.findAll({
      include: [
        {
          model: models.Period,
        },
      ],
    });
    res.send(projects);
    console.log(res)
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get("/expenses", async (req, res) => {
  try {
    const actions = await models.Expense.findAll({
      include: [
        {
          model: models.Supplier,
          attributes: ["id", "VAT_number"]
        },
        {
          model: models.WorkPackage,
          attributes: ["number", "name"],
          include: {model: models.Project, attributes: ["id", "CE_code"]}
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
