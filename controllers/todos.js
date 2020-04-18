const Todo = require('../data/todo');

const index = (req, res, next) => {
  res.render('/index', {
    todos: Todo.getAll(),
    done: false,
  });
};

const create = (req, res) => {
  req.body.done = false;
  Todo.create(req.body);
  res.redirect('/');
}

const deleteTodo = (req, res) => {
 Todo.deleteOne(req.params.id);
  res.redirect('/');
}


module.exports = {
  index,
  create,
  deleteTodo,
};
