const express = require('express');
const router = express.Router();
const { getAll, create, getOne, update, destroy } = require('./controller');

// validation
const { validationCreate, validationGetOne, validationUpdate, validationDestroy } = require('./validator');

router.get('/', getAll);
router.post('/', validationCreate, create);
router.get('/:id', validationGetOne, getOne);
router.put('/:id', validationUpdate, update);
router.delete('/:id', validationDestroy, destroy);

module.exports = router;