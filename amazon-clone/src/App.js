import './App.css';
import Checkout from './HomePgeComponent/Checkout.js';
import Header from './HomePgeComponent/Header';
import Home from './HomePgeComponent/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './HomePgeComponent/Login.js';
import { useEffect } from 'react';
import { useStateValue } from './services/StateProvider.js';
import { auth } from './firebase.js';
import Payment from './HomePgeComponent/Payment.js';

function App() {
const[{},dispatch]=useStateValue();


// to know who has signup
useEffect(()=>{
// will only loads once when the app component loads

// listner
auth.onAuthStateChanged(authUser=>{
  console.log('THE USER IS >>>',authUser);

  if(authUser){
    // the user just logged in / the user was logged in

    dispatch({
      type:'SET_USER',
      user:authUser
    })
  }
  else{
    // user just logged out
    dispatch({
      type:'SET_USER',
      user:null
    })
  }
})
},[])

  return (
    <Router>
      <div className="App">
        <Routes>

        <Route path="/login" element={<>
            {/* <Header /> */}
            <Login/>
          </>} />

        
          <Route path="/checkout" element={<>
            <Header />
            {/* <h1>I AM A CHECKOUT, SMASH THE LIKE BUTTON</h1> */}
            <Checkout/>
          </>} />

          <Route path="/payment" element={<>
            <Header />
        <Payment/>
            
          </>} />


          <Route path="/" element={<>
            <Header />
            <Home />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
