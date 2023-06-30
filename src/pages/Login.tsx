import React, { useState, useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
interface LoginContextType {
	setData: React.Dispatch<React.SetStateAction<boolean>>;
  }
const Login = () => {
  const { setData } = useContext<LoginContextType>(LoginContext);
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  interface Person {
    name: string;
    password: string;
    age: number;
    info: string;
  }

  const [dane, setdane] = useState<Person[]>([
    {
      name: "Kacper",
      password: "12345",
      age: 20,
      info: "junior",
    },
    {
      name: "Rycho",
      password: "12345",
      age: 40,
      info: "senior",
    },
    {
      name: "DawidJ",
      password: "12345",
      age: 32,
      info: "Mid",
    },
  ]);

  const handleSubmitter = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginValue === '' || passwordValue === '') return;
    dane.map((dan) => {
      if (loginValue === dan.name && passwordValue === dan.password) return setData(true);
      else console.log('Something went wrong try again');
	  
    });
  };

  return (
    <form onSubmit={handleSubmitter}>
      <div>
        Login to your account<br /><br />
        Name:
        <input
          type="text"
          id="login"
          value={loginValue}
          onChange={(e) => {
            setLoginValue(e.target.value);
          }}
        /><br /><br />
        Password:
        <input
          type="password"
          id="password"
          value={passwordValue}
          onChange={(e) => {
            setPasswordValue(e.target.value);
          }}
        /><br /><br />
        <button type="submit">Wyslij</button>
      </div>
    </form>
  );
};

export default Login;
