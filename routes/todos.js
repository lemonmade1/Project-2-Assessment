const router = require('express').Router();
const todosCtrl = require('../controllers/todos');


router.get('/', todosCtrl.index);

router.post('/', todosCtrl.create);

router.delete('/:id', todosCtrl.deleteTodo);


module.exports = router;
