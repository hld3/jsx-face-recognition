/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const initialState = {
  user: {},
  email: '',
  password: '',
  faceUrl: '',
};

export const InitialContext = createContext(initialState);

export const InitialStateContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [faceUrl, setFaceUrl] = useState('');
  const [input, setInput] = useState('');
  const [box, setBox] = useState({});

  const resetState = () => {
    setUser({});
    setUserEmail('');
    setPassword('');
    setFaceUrl('');
    setBox({});
    setInput('');
  };

  // prettier-ignore
  return (
    <InitialContext.Provider
      value={{
        resetState,
        user, setUser,
        userEmail, setUserEmail,
        password, setPassword,
        faceUrl, setFaceUrl,
        input, setInput,
        box, setBox,
      }}
    >
      {children}
    </InitialContext.Provider>
  );
};
