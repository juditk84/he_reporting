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

router.get("/:project_id/periods", async (req, res) => {

  const project_id = req.params.project_id

  try {
    const periods = await models.Period.findAll({
    
      where: {
        ProjectId: project_id,
      },
      include: [
        {
          model: models.Expense,
        },
      ],

    });
    res.send(periods);
    console.log(res)
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get("/:period_id/expenses", async (req, res) => {

  const period_id = req.params.period_id;

  try {
    const expenses = await models.Expense.findAll({
    
      where: {
        PeriodId: period_id,
      },

    });
    res.send(expenses);
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
