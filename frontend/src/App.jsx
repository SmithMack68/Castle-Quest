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
import EditCastle from './features/castles/EditCastle';
import AddReviewForm from './features/reviews/AddReviewForm';
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
        <Route path="/castles/:id/edit" element={<EditCastle />} />
        <Route path="/castles/reviews/:castle_id" element={ <AddReviewForm />} />
        {/* <Route path="/reviews/:id/edit" element={ <EditReview />} />
        <Route path="/reviews" element={ <ReviewList />} />
        <Route path="/reviews/:id" element={ <ReviewDetail />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
