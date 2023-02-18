import React, { useEffect } from 'react';
import Navbar from './components/Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
import Home from './components/static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import CastleList from './features/castles/CastleList';
import Castle from './features/castles/Castles';
import AddCastleForm from './features/castles/AddCastleForm';
// import EditCastle
// import './App.css';


function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch()
  // })


  return (
    <Router>
      {/* <div className='App'> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/castles" element={<CastleList />} />
        <Route path="/castles/new" element={<AddCastleForm />} />
        <Route path="/castles/:id" element={<Castle />} /> 
        {/* {/* <Route path="/castles/:id/edit" element={<EditCastle />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
