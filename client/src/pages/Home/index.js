import React, { useState } from 'react';
import './styles.css';

import Switch from '../../components/Switch';

const TodoList = ({ todos }) => (
  <div className="p-4">
    {todos.length === 0 && (
      <div className="mt-10 w-64 bg-gray-200 text-gray-500 h-32 mx-auto flex items-center justify-center rounded-lg">
        There are no To-Dos ...
      </div>
    )}
    {todos.map((todo) => (
      <div
        key={todo.id}
        className="relative flex flex-row bg-gray-200 mb-2 px-4 py-10 rounded-lg items-center max-w-sm mx-auto shadow-md border-l-8 border-red-300 cursor-pointer"
      >
        <div className="flex-1">
          <strong className={todo.done ? 'line-through text-gray-500' : ''}>
            {todo.title}
          </strong>
          <p className="w-64 text-gray-500 text-sm overflow-hidden whitespace-no-wrap ellipsis">
            <span className={todo.done ? 'line-through' : ''}>
              {todo.description}
            </span>
          </p>
        </div>
        <div className="float-right flex flex-col items-center">
          <Switch
            label="Done"
            name={`checkbox-${todo.id}`}
            id={`checkbox-${todo.id}`}
          />
          <span className="text-xs">Done</span>
        </div>
        <div className="absolute right-0 top-0 mt-3 mr-4 cursor-pointer">
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

function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const _todo = {
      id: todos.length,
      title: 'Título',
      description:
        'Description Description Description Description Description Description Description Description Description Description Description Description Description Description ',
      done: false,
    };
    setTodos([...todos, _todo]);
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-lg font-bold p-4">
        Simple Todo-App built with Deno and ReactJS
      </h1>
      <div className="flex flex-row p-4 w-full bg-gray-200 justify-evenly">
        <button
          className="bg-blue-500 py-1 px-2 text-white font-bold rounded"
          onClick={() => addTodo()}
        >
          New Todo
        </button>
      </div>
      <TodoList todos={todos} />
    </div>
  );
}

export default Home;
