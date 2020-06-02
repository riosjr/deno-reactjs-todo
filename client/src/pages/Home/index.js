import React, { useState, useContext } from 'react';
import './styles.css';

import { AppContext } from '../../store/AppContext';

import TodoList from '../../components/TodoList'
import TodoModal from '../../components/TodoModal'

function Home() {
  //const [todos, setTodos] = useState([]);
  const [state, setState] = useContext(AppContext);

  const { todos } = state;

  const newTodo = () => {
   /*  const _todo = {
      id: Object.keys(todos).length,
      title: 'Título',
      description:
        'Description Description Description Description Description Description Description Description Description Description Description Description Description Description ',
      done: false,
    }; */
    //setTodos([...todos, _todo]);
   /*  setState({
      ...state,
      todos: {
        ...todos,
        [_todo.id]: _todo
      }
    }) */

    setState({
      ...state,
      openModal: true
    })
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-lg font-bold p-4">
        Simple Todo-App built with Deno and ReactJS
      </h1>
      <div className="flex flex-row p-4 w-full bg-gray-200 justify-evenly">
        <button
          className="bg-blue-500 py-1 px-2 text-white font-bold rounded"
          onClick={() => newTodo()}
        >
          New Todo
        </button>
      </div>
      <TodoList todos={todos} />
      <TodoModal />
    </div>
  );
}

export default Home;
