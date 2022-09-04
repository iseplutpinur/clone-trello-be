const express = require('express');
const router = express.Router();
const { create, getOne, update, destroy, move } = require('./controller');

// validation
const { validationCreate, validationGetOne, validationUpdate, validationDestroy, validationMove } = require('./validator');

router.get('/:id', validationGetOne, getOne);
router.post('/', validationCreate, create);
router.put('/:id', validationUpdate, update);
router.put('/:id/move', validationMove, move);
router.delete('/:id', validationDestroy, destroy);

module.exports = router;