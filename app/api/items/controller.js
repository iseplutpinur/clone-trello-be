const { Todo, Item } = require('../../db/models');

module.exports = {
  create: async (req, res, next) => {
    try {
      const { name, TodoId } = req.body;
      const result = await Item.create({ name, TodoId });
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
      const result = await Item.findOne({
        where: { id },
        attributes: ['id', 'name'],
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
      Item.findOne({
        where: { id },
        attributes: ['id', 'name'],
      }).then((item) => {
        item.update({ name }).then((item) => {
          res.status(200).json({
            message: 'success',
            data: item
          });
        });
      }).catch(console.log);
    } catch (error) {
      next(error);
    }
  },
  move: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { TargetTodoId } = req.body;
      const result = await Item.findOne({
        where: { id },
        attributes: ['id', 'name'],
      });

      result.TodoId = TargetTodoId;
      await result.save();

      res.status(200).json({
        message: 'success',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },
  destroy: (req, res, next) => {
    try {
      const { id } = req.params;
      Item.destroy({ where: { id } })
        .then((item) => {
          res.status(200).json({
            message: 'success',
            data: item
          });
        })
        .catch(console.log);
    } catch (error) {
      next(error);
    }
  },
}