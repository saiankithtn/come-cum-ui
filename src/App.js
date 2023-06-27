import logo from './logo.svg';
import './App.css';
import Login from './Containers/Login';
import Header from './Containers/Header';
import Home from './Containers/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Containers/SignUp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<Home />} />
          
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<Login />} />
      </Routes>
    </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
