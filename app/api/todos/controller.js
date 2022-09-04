const { Todo, Item } = require('../../db/models');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await Todo.findAll({
        attributes: ['id', 'name'],
        include: {
          model: Item,
          attributes: ['id', 'name', 'TodoId'],
        }
      });
      res.status(200).json({
        message: 'success',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const { name } = req.body;
      const result = await Todo.create({ name });
      res.status(201).json({
        message: 'success',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Todo.findOne({
        where: { id },
        attributes: ['id', 'name'],
        include: {
          model: Item,
          attributes: ['id', 'name', 'TodoId'],
        }
      });
      res.status(200).json({
        message: 'success',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },
  update: (req, res, next) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      Todo.findOne({
        where: { id },
        attributes: ['id', 'name'],
      }).then((todo) => {
        todo.update({ name }).then((todo) => {
          res.status(200).json({
            message: 'success',
            data: todo
          });
        });
      }).catch(console.log);

    } catch (error) {
      next(error);
    }
  },
  destroy: (req, res, next) => {
    try {
      const { id } = req.params;
      Todo.destroy({ where: { id } })
        .then((todo) => {
          res.status(200).json({
            message: 'success',
            data: todo
          });
        })
        .catch(console.log);
    } catch (error) {
      next(error);
    }
  },
}