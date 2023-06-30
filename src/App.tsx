import './App.css';
import { LoginContext } from './Context/LoginContext';
import React, {useState} from 'react';
import Profile from './pages/Profile';
import Login from './pages/Login';
function App() {
	const [Data, setData] = useState(true)
  return (
    <div className="App">
		<LoginContext.Provider value={{ setData }}>
  			{Data ? <Profile /> : <Login />}
		</LoginContext.Provider>
    </div>
  );
}

export default App;
