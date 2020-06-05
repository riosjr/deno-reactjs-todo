import React, { useContext, useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';

import { AppContext } from '../../store/AppContext';
import TextInput from '../Inputs/TextInput';
import Button from '../Inputs/Button';
import FlatButton from '../Inputs/FlatButton';
import CheckBox from '../Inputs/CheckBox';

const TodoModal = () => {
  const [state, setState] = useContext(AppContext);
  const { openModal, currentTodo } = state;
  const [loading, setLoading] = useState(false);
  const [todo, setTodo] = useState({
    title: '',
    description: '',
    done: false,
  });
  const [titleError, setTitleError] = useState('At least 3 characters.');

  useEffect(() => {
    const { currentTodo } = state;
    if (currentTodo) {
      setTodo({
        ...currentTodo,
      });
    }
  }, [state]);

  useEffect(() => {
    if (todo.title.length < 3) {
      setTitleError('At least 3 characters.');
    } else {
      setTitleError(null);
    }
  }, [todo.title]);
  const clearFields = () => {
    setTodo({
      title: '',
      description: '',
      done: false,
    });
  };
  const closeModal = () => {
    setState({
      ...state,
      openModal: false,
      currentTodo: null
    });
    clearFields();
  };

  const changeTodo = (field, value) => {
    setTodo({
      ...todo,
      [field]: value,
    });
  };

  const onSave = () => {
    //alert(JSON.stringify(todo));

    const id = currentTodo ? currentTodo.id : Math.floor(Math.random() * 100);

    const _todo = {
      ...todo,
      id,
    };
    console.log(_todo);

    setState({
      ...state,
      openModal: false,
      todos: {
        ...state.todos,
        [_todo.id]: _todo,
      },
    });
    console.log(state);
    clearFields();
  };

  return (
    <Modal
      visible={openModal}
      //width="400"
      //height="320"
      effect="fadeInUp"
      onClickAway={() => closeModal()}
    >
      <div className="p-4">
        <h1 className="text-lg font-bold mb-5">Add Todo</h1>
        <TextInput
          label="Title"
          type="input"
          error={titleError}
          value={todo.title}
          onChange={(e) => changeTodo('title', e.target.value)}
          autoFocus
        ></TextInput>
        <TextInput
          label="Description"
          type="input"
          value={todo.description}
          onChange={(e) => changeTodo('description', e.target.value)}
        ></TextInput>
        <div className="ml-3">
          <CheckBox
            label="Done"
            checked={todo.done}
            onChange={(e) => changeTodo('done', e.target.checked)}
          />
        </div>
        <div className="flex justify-end mt-4">
          <FlatButton className="text-red-500" onClick={() => closeModal()}>
            Cancel
          </FlatButton>
          <Button
            className="bg-blue-500"
            onClick={onSave}
            disabled={titleError || loading}
          >
            SAVE
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default TodoModal;
