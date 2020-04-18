const router = require('express').Router();
const Todo = require('../data/todo');
const todosCtrl = require('../controllers/todos');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { 
    todos: Todo.getAll(),    
    // done: false, 
    title: 'To Do List',
  });
});

router.get('/', todosCtrl.index);

router.post('/', todosCtrl.create);

router.delete('/:id', todosCtrl.deleteTodo);


module.exports = router;
