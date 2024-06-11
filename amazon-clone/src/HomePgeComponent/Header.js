import React, { useState } from 'react';
import './Header.css';
import Logo from './pictures/Amazon-Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../services/StateProvider';
import { auth } from '../firebase';
function Header() {

  // const[search,setSearch]=useState("");
  // const navigate=useNavigate();

  // function to handle search input chnage
  // const handleSearchChange=(e)=>{
  //     setSearch(e.target.value);
  // }

   // Function to handle search submission
  //  const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   if (search.trim()) {
  //     // Navigate to the search results page
  //     navigate(`/search?query=${search}`);
  //   }
  // };


const handleAuthentication=()=>{
  if(user){
    auth.signOut();
  }
}

  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='header'> 
    <Link to='/'>
    <img className='header_logo' src={Logo} alt="Amazon Logo"/>
    </Link>
      

      <div className="header_search">
        <input
            className='header_searchInput'
          
            type="text"
          />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className="header_nav">
        <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="header_option">
          <span className='headerOption_lineOne'>Hello {!user?'Guest':
            user.email}!</span>
          <span className='headerOption_lineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        

        <div className="header_option">
          <span className='headerOption_lineOne'>Returns</span>
          <span className='headerOption_lineTwo'>Orders</span>
        </div>

        <div className="header_option">
          <span className='headerOption_lineOne'>Your</span>
          <span className='headerOption_lineTwo'>Prime</span>
        </div>
        <Link to='/checkout'>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className='headerOption_lineTwo header_basketCount'>
            {basket?.length}</span>

            {/* The ?. syntax is the optional chaining operator introduced in ECMAScript 2020 (ES11). It allows you to safely access nested properties of an object without having to explicitly check if each property in the chain is null or undefined */}
        </div>
        </Link>

      
      </div>
    </div>
  );
}

export default Header;
