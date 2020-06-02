import React, { useContext } from 'react';
import { AppContext } from '../../store/AppContext';
import Switch from '../Switch';

const TodoItem = () => {};

const TodoList = () => {
  const [state, setState] = useContext(AppContext);
  const { todos } = state;
  const onDelete = (todo) => {
    //const _todos = todos.filter((t) => t.id !== todo.id);
    delete todos[todo.id];
    setState({
      ...state,
      todos: {
        ...todos,
      },
    });
  };
  const onUpdate = (id, done) => {
    const _todo = {
      ...todos[id],
      done,
    };
    setState({
      ...state,
      todos: {
        ...todos,
        [id]: _todo,
      },
    });
  };
  return (
    <div className="p-4">
      {Object.keys(todos).length === 0 && (
        <div className="mt-10 w-64 bg-gray-200 text-gray-500 h-32 mx-auto flex items-center justify-center rounded-lg">
          There are no To-Dos ...
        </div>
      )}
      {Object.keys(todos).map((id) => (
        <div
          key={id}
          className="relative flex flex-row bg-gray-200 mb-2 px-4 py-10 rounded-lg items-center max-w-sm mx-auto shadow-md border-l-8 border-red-300 cursor-pointer"
        >
          <div className="flex-1">
            <strong
              className={todos[id].done ? 'line-through text-gray-500' : ''}
            >
              {todos[id].title}
            </strong>
            <p className="w-64 text-gray-500 text-sm overflow-hidden whitespace-no-wrap ellipsis">
              <span className={todos[id].done ? 'line-through' : ''}>
                {todos[id].description}
              </span>
            </p>
          </div>
          <div className="float-right flex flex-col items-center">
            <Switch
              label="Done"
              name={`checkbox-${todos[id].id}`}
              id={`checkbox-${todos[id].id}`}
              checked={todos[id].done}
              onChange={(e) => onUpdate(id, e.target.checked)}
            />
            <span className="text-xs">Done</span>
          </div>
          <div
            className="absolute right-0 top-0 mt-3 mr-4 cursor-pointer"
            onClick={() => onDelete(todos[id])}
          >
            <img
              src={require('../../assets/images/close.svg')}
              className="w-4 h-4"
              alt="Delete to-do"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
