const express = require('express');
const router = express.Router();

const StudentController = require('../constrollers/StudentController');

router.get('/student', StudentController.index);
router.get('/student/:id', StudentController.show);
router.post('/student', StudentController.store);
router.patch('/student/:id', StudentController.update);
router.delete('/student/:id', StudentController.delete);

module.exports = router;