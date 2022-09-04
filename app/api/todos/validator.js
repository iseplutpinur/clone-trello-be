const { body, validationResult, param } = require('express-validator');
const { Todo } = require('../../db/models');

module.exports = {
  validationCreate: [
    body('name').notEmpty().trim().withMessage('name is required'),
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).json({
          message: 'error',
          error: error.array()
        });
      }
      next();
    }
  ],
  validationGetOne: [
    param('id')
      .notEmpty()
      .withMessage('param id is required')
      .bail()
      .isNumeric()
      .withMessage('id must be an integer')
      .bail()
      .custom(async (value, { req, res }) => {
        const checking = await Todo.findOne({ where: { id: value } })
        if (checking === null) {
          return Promise.reject();
        }
      })
      .withMessage('param id not found'),
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).json({
          message: 'error',
          error: error.array()
        });
      }
      next();
    }
  ],
  validationUpdate: [
    param('id')
      .notEmpty()
      .withMessage('param id is required')
      .bail()
      .isNumeric()
      .withMessage('id must be an integer')
      .bail()
      .custom(async (value, { req, res }) => {
        const checking = await Todo.findOne({ where: { id: value } })
        if (checking === null) {
          return Promise.reject();
        }
      })
      .withMessage('param id not found'),
    body('name').notEmpty().trim().withMessage('name is required'),
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).json({
          message: 'error',
          error: error.array()
        });
      }
      next();
    }
  ],
  validationDestroy: [
    param('id')
      .notEmpty()
      .withMessage('param id is required')
      .bail()
      .isNumeric()
      .withMessage('id must be an integer')
      .bail()
      .custom(async (value, { req, res }) => {
        const checking = await Todo.findOne({ where: { id: value } })
        if (checking === null) {
          return Promise.reject();
        }
      })
      .withMessage('param id not found'),
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).json({
          message: 'error',
          error: error.array()
        });
      }
      next();
    }
  ],
};