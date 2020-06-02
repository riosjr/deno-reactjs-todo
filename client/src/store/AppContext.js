import React, { createContext, useState } from 'react';

const AppContext = createContext([{}, () => {}]);

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({
    todos: {},
    currentTodo: null,
    openModal: false,
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
