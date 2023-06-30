import React, { useContext } from 'react'
import { createContext } from 'react';

interface LoginContextType {
  setData: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginContext = createContext<LoginContextType>({ setData: () => {} });
